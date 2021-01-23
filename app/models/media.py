from .db import db
from sqlalchemy.orm import relationship


class Media(db.Model):
    __tablename__ = "media"
    id = db.Column(db.Integer, primary_key=True)
    media_url = db.Column(db.String(1000), nullable=False)
    media_name = db.Column(db.String(255), nullable=True)
    boat_id = db.Column(db.Integer, db.ForeignKey("boats.id"))

    boat = relationship("Boat")

    def to_dict(self):
        return {
            "id": self.id,
            "mediaUrl": self.media_url,
            "mediaName": self.media_name,
            "boatId": self.boat_id
        }
