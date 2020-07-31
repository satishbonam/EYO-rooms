from . import db


# reviews model for user reviews
class LocationModel(db.Model):

    __tablename__ = "locations"

    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey(
        'hotel.id'), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    lat = db.Column(db.Float(10, 6), nullable=False)
    lon = db.Column(db.Float(10, 6), nullable=False)
    address = db.Column(db.Text, nullable=True)
