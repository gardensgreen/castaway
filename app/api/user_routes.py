from flask import Blueprint, jsonify, session, request
from flask_login import current_user

from ..models.db import db
from ..models.user import User
from ..models.reservation import Reservation

user_routes = Blueprint('users', __name__)


@user_routes.route("/<int:id>")
def get_user(id):
    user = User.query.get(id)
    if user:
        return jsonify(user.to_dict())
    else:
        return ({"error": "error"})


@user_routes.route("/<int:id>/reservations")
def get_reservations_for_user(id):
    reservations = Reservation.query.filter_by(user_id=id).all()
    return jsonify([reservation.to_dict() for reservation in reservations])


@user_routes.route("/<int:id>/likes")
def get_likes_for_user(id):
    user = User.query.get(id)
    if user:
        return jsonify([boat for boat in user.to_dict_likes()["likedBoats"]])
