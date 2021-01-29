from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime
from .like import Like


"""
Boat Types:
Center Console
Catamaran
Sailboat
Yacht
Sport
Racing
Waverunner
Jetski
fishing boat
"""


class Boat(db.Model):
    __tablename__ = "boats"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    boat_type = db.Column(db.String(50), nullable=False)
    total_occupancy = db.Column(db.Integer, nullable=False)
    total_bedrooms = db.Column(db.Integer, nullable=False)
    total_bathrooms = db.Column(db.Integer, nullable=False)
    length = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.String(1000), nullable=False)
    has_tv = db.Column(db.Boolean, nullable=False, default=False)
    has_kitchen = db.Column(db.Boolean, nullable=False, default=False)
    has_air_con = db.Column(db.Boolean, nullable=False, default=False)
    has_internet = db.Column(db.Boolean, nullable=False, default=False)
    has_heating = db.Column(db.Boolean, nullable=False, default=False)
    price = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    latitude = db.Column(db.Numeric(60, 50), nullable=False)
    longitude = db.Column(db.Numeric(60, 50), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    photos = relationship("Media", backref="media")
    owner = relationship("User")
    liking_users = relationship(
        "User", secondary=Like, back_populates="liked_boats")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "boatType": self.boat_type,
            "totalOccupancy": self.total_occupancy,
            "totalBedrooms": self.total_bedrooms,
            "totalBathrooms": self.total_bathrooms,
            "length": self.length,
            "address": self.address,
            "summary": self.summary,
            "amenities": {
                "hasTv": self.has_tv,
                "hasKitchen": self.has_kitchen,
                "hasAirConditioning": self.has_air_con,
                "hasInternet": self.has_internet,
                "hasHeating": self.has_heating,
            },
            "price": self.price,
            "createdAt": self.created_at,
            "latitude": f"{self.latitude}",
            "longitude": f"{self.longitude}",
            "ownerId": self.owner_id,
            "owner": self.owner.to_dict(),
            "photos": [photo.to_dict() for photo in self.photos],
            "likingUsers": [user.id for user in self.liking_users],
            "likes": len(self.liking_users)
        }

    def to_dict_no_owner(self):
        return {
            "id": self.id,
            "name": self.name,
            "boatType": self.boat_type,
            "totalOccupancy": self.total_occupancy,
            "totalBedrooms": self.total_bedrooms,
            "totalBathrooms": self.total_bathrooms,
            "length": self.length,
            "address": self.address,
            "summary": self.summary,
            "amenities": {
                "hasTv": self.has_tv,
                "hasKitchen": self.has_kitchen,
                "hasAirConditioning": self.has_air_con,
                "hasInternet": self.has_internet,
                "hasHeating": self.has_heating,
            },
            "price": self.price,
            "createdAt": self.created_at,
            "latitude": f"{self.latitude}",
            "longitude": f"{self.longitude}",
            "ownerId": self.owner_id,
            # "likingUsers": self.liking_users,
            "photos": [photo.to_dict() for photo in self.photos],
        }

    def to_dict_no_photos(self):
        return {
            "id": self.id,
            "name": self.name,
            "boatType": self.boat_type,
            "totalOccupancy": self.total_occupancy,
            "totalBedrooms": self.total_bedrooms,
            "totalBathrooms": self.total_bathrooms,
            "length": self.length,
            "address": self.address,
            "summary": self.summary,
            "amenities": {
                "hasTv": self.has_tv,
                "hasKitchen": self.has_kitchen,
                "hasAirConditioning": self.has_air_con,
                "hasInternet": self.has_internet,
                "hasHeating": self.has_heating,
            },
            "price": self.price,
            "createdAt": self.created_at,
            "latitude": f"{self.latitude}",
            "longitude": f"{self.longitude}",
            "ownerId": self.owner_id,

        }
