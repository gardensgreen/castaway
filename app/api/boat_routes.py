from flask import Blueprint, jsonify, request

from ..models.db import db
from ..models.boats import Boat

boat_routes = Blueprint('boats', __name__)


@boat_routes.route("/")
def get_boats():
    boats = Boat.query.all()
    return jsonify({"Boats": [boat.to_dict() for boat in boats]})
