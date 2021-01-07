from .db import db
from datetime import datetime
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash


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
        }
