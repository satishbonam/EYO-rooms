from flask import request
from flask_restful import Resource, reqparse
from app.main.models import db
from app.main.services.payment import payment_initialize
import jwt
import datetime
from ..utils.token_validate import token_validate


# POST route to register
class PaymentInitialize(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('check_in', type=str, required=True)
    parser.add_argument('check_out', type=str, required=True)
    parser.add_argument('amount', type=str, required=True)
    parser.add_argument('no_of_rooms', type=str, required=True)
    parser.add_argument('no_of_guests', type=str, required=True)
    parser.add_argument('hotel_id', type=str, required=True)
    parser.add_argument('room_id', type=str, required=True)

    @classmethod
    def post(self):
        auth_token = request.headers.get('auth_token')
        payload = PaymentInitialize.parser.parse_args()

        flag_token, token_data = token_validate(auth_token)

        if flag_token:
            flag_request, data = payment_initialize(payload, token_data)
            if flag_request:
                return {"status": True, "data": data}
            else:
                return {"status": False, "msg": "Error in getting hotels"}
        else:
            return{"status": False, "msg": "Invalid token"}
