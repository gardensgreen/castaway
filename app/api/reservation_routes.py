from flask import Blueprint, jsonify, request
from ..models.db import db
from ..models.reservation import Reservation

reservation_routes = Blueprint('reservations', __name__)


@reservation_routes.route("/<int:id>", methods=["DELETE"])
def delete_reservation(id):
    reservation = Reservation.query.get(id)
    if (reservation):
        db.session.delete(reservation)
        db.session.commit()
        return jsonify({"success": "success"})
    else:
        return jsonify({"error": "error"})
