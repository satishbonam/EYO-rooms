from . import db


# reviews model for user reviews
class ReviewsModel(db.Model):

    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'), nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey(
        'hotel.id'), nullable=False)
    is_verified = db.Column(db.Boolean, nullable=False)
    comment = db.Column(db.Text, nullable=False)
    rating = db.Column(db.DECIMAL(2, 1), nullable=False)
    date = db.Column(db.Date, nullable=False)
