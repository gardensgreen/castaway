from .db import db
from datetime import datetime


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True)
    hashedPassword = db.Column(db.String(32), nullable=False)
    firstName = db.Column(db.String(40), nullable=True)
    lastName = db.Column(db.String(40), nullable=True)
    isHost = db.Column(db.Boolean, nullable=True)
    avatarUrl = db.Column(db.String(100), nullable=True)
    bio = db.Column(db.String(255), nullable=True)
    createdAt = db.Column(db.DateTime, default=datetime.now())
