from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime


class Reservation(db.Model):
    __tablename__ = "reservations"
    id = db.Column(db.Integer, primary_key=True)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    boat_id = db.Column(db.Integer, db.ForeignKey("boats.id"))

    # user = relationship("User", backref="reservations")
    boat = relationship("Boat", backref="reservations")

    def to_dict(self):
        return {
            "id": self.id,
            "startDate": self.start_date,
            "endDate": self.end_date,
            "price": self.price,
            "total": self.total,
            "createdAt": self.created_at,
            "userId": self.user_id,
            "boatId": self.boat_id,
            "boat": self.boat.to_dict_no_owner()
        }
