from flask import Blueprint, jsonify, request
from flask_login import current_user

from ..models.db import db
from ..models.boats import Boat
from ..models.user import User
from ..forms.create_boat import CreateBoatForm

boat_routes = Blueprint('boats', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a HashMap
    """
    errorMessages = {"fields": [], "messages": []}
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages["fields"].append(field)
            errorMessages["messages"].append(error)
    return errorMessages


@boat_routes.route("/")
def get_boats():
    boats = Boat.query.all()
    return jsonify([boat.to_dict() for boat in boats])


@boat_routes.route("/<int:id>")
def get_boat(id):
    boat = Boat.query.get(id)
    if boat:
        return jsonify(boat.to_dict())
    else:
        return ({"error": "error"})


# @boat_routes.route("/<int:id>/reservations", methods=["POST"])
# def get_boat(id):
#     boat = Boat.query.get(id)
#     user = User.query.get(current_user.get_id())
#     if boat:
#         return jsonify(boat.to_dict())
#     else:
#         return ({"error": "error"})


@boat_routes.route("/", methods=["POST"])
def create_boat():
    form = CreateBoatForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        boat = Boat(summary=form.data['summary'],
                    boat_type=form.data['boat_type'],
                    total_occupancy=form.data['total_occupancy'],
                    total_bedrooms=form.data['total_bedrooms'],
                    total_bathrooms=form.data['total_bathrooms'],
                    length=form.data['length'],
                    address=form.data['address'],
                    has_tv=form.data['has_tv'],
                    has_kitchen=form.data['has_kitchen'],
                    has_air_con=form.data['has_air_con'],
                    has_internet=form.data['has_internet'],
                    has_heating=form.data['has_heating'],
                    price=form.data['price'],
                    latitude=form.data['latitude'],
                    longitude=form.data['longitude'],
                    owner_id=current_user.get_id()
                    )
        db.session.add(boat)
        db.session.commit()
        return jsonify(boat.to_dict())
    else:
        return jsonify({'errors': validation_errors_to_error_messages(form.errors)}), 401
