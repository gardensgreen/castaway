from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True)
    hashedPassword = db.Column(db.String(255), nullable=False)
    firstName = db.Column(db.String(40), nullable=False)
    lastName = db.Column(db.String(40), nullable=False)
    isHost = db.Column(db.Boolean, nullable=False)
    avatarUrl = db.Column(db.String(100), nullable=False)
    bio = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.now())
