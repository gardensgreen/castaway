from flask import Blueprint, jsonify, session, request
from flask_login import current_user

from ..models.db import db
from ..models.user import User

user_routes = Blueprint('users', __name__)


@user_routes.route("/<int:id>")
def get_user(id):
    user = User.query.get(id)
    if user:
        return jsonify(user.to_dict())
    else:
        return ({"error": "error"})
