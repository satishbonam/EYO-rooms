from . import db


# database model for all transactions
class TransactionsModel(db.Model):

    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey(
        'hotel.id'), nullable=False)
    room_id = db.Column(db.Integer, nullable=False)
    check_in = db.Column(db.Date, nullable=False)
    check_out = db.Column(db.Date, nullable=False)
    booking_details = db.Column(db.JSON, nullable=False)
    isVerified = db.Column(db.Boolean, nullable=False)
    payment_details = db.Column(db.JSON, nullable=False)
