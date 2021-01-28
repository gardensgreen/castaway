from .db import db
from datetime import datetime
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash

from .like import Like
from .reservation import Reservation


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True)
    hashedPassword = db.Column(db.String(255), nullable=False)
    firstName = db.Column(db.String(40), nullable=True)
    lastName = db.Column(db.String(40), nullable=True)
    isHost = db.Column(db.Boolean, nullable=True)
    avatarUrl = db.Column(db.String(100), nullable=True)
    bio = db.Column(db.String(255), nullable=True)
    createdAt = db.Column(db.DateTime, default=datetime.now())
    boats = relationship("Boat", backref="boats")
    reservations = relationship("Reservation", backref="reservations")
    liked_boats = relationship("Boat", secondary=Like,
                               back_populates="liking_users")

    @property
    def password(self):
        return self.hashedPassword

    @password.setter
    def password(self, password):
        self.hashedPassword = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "isHost": self.isHost,
            "avatarUrl": self.avatarUrl,
            "bio": self.bio,
            "createdAt": self.createdAt,
            "boats": [boat.id for boat in self.boats],
            "reservations": [reservation.id for reservation in self.reservations],
            "likedBoats": [boat.id for boat in self.liked_boats]
        }

    def to_dict_boats(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "isHost": self.isHost,
            "avatarUrl": self.avatarUrl,
            "bio": self.bio,
            "createdAt": self.createdAt,
            "boats": [boat.to_dict_no_owner() for boat in self.boats],
            "reservations": [reservation.id for reservation in self.reservations],
            "likedBoats": [boat.id for boat in self.liked_boats]
        }

    def to_dict_reservations(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "isHost": self.isHost,
            "avatarUrl": self.avatarUrl,
            "bio": self.bio,
            "createdAt": self.createdAt,
            "boats": [boat.id for boat in self.boats],
            "reservations": [reservation.to_dict() for reservation in self.reservations],
            "likedBoats": [boat.id for boat in self.liked_boats]
        }

    def to_dict_likes(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "isHost": self.isHost,
            "avatarUrl": self.avatarUrl,
            "bio": self.bio,
            "createdAt": self.createdAt,
            "boats": [boat.id for boat in self.boats],
            "reservations": [reservation.id for reservation in self.reservations],
            "likedBoats": [boat.to_dict() for boat in self.liked_boats]
        }
