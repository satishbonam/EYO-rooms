from flask import request
from flask_restful import Resource, reqparse
from app.main.models import db
from ..services.entity import entity, bill_data, recommendations, reviews
import jwt
import datetime
import json
from ..utils.token_validate import token_validate


# showing the estimation in entity page
class BillData(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("hotel_id", type=int, required=True)
    parser.add_argument("room_id", type=int, required=False)
    parser.add_argument("check_in", type=str, required=False)
    parser.add_argument("check_out", type=str, required=False)
    parser.add_argument("no_of_guests", type=int, required=False)
    parser.add_argument("no_of_rooms", type=int, required=False)
    parser.add_argument("membership", type=bool, required=False)

    @ classmethod
    def post(self):
        payload = BillData.parser.parse_args()
        flag_request, data = bill_data(payload)

        if flag_request:
            return {"status": True, "data": data}
        else:
            return {"status": False, "msg": "incorrect details"}


# get basic details of hotel
class Entity(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("hotel_id", type=int, required=True)

    @ classmethod
    def post(self):
        payload = Entity.parser.parse_args()

        flag_request, data = entity(payload)

        if flag_request:
            return {"status": True, "data": data}
        else:
            return {"status": False, "msg": "incorrect details"}

# get basic details of hotel


class Recommendations(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("hotel_id", type=int, required=True)

    @ classmethod
    def post(self):
        payload = Recommendations.parser.parse_args()
        params = request.args

        flag_request, data = recommendations(payload, params)

        if flag_request:
            return {"status": True, "data": data}
        else:
            return {"status": False, "msg": "incorrect details"}


class Reviews(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("hotel_id", type=int, required=True)

    @ classmethod
    def post(self):
        payload = Reviews.parser.parse_args()

        data = reviews(payload)

        if data:
            return {"status": True, "data": data}
        else:
            return {"status": False, "msg": "incorrect details"}
