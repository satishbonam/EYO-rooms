from flask import request
from flask_restful import Resource, reqparse
from app.main.models import db
from ..services.listing import hotel_listing
import jwt
import datetime
from ..utils.token_validate import token_validate


# POST route to register
class HotelListing(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("lat", type=str, required=True)
    parser.add_argument("lon", type=str, required=True)
    parser.add_argument("page", type=int, required=False)

    @classmethod
    def post(self):
        params = request.args
        data_post = HotelListing.parser.parse_args()
        data, total_pages, total_results, page, filters = hotel_listing(
            params, data_post)

        if data:
            return {"status": True, "page": page, "data": data, "total_pages": total_pages, "total_results": total_results, "filters": filters}
        else:
            return {"status": False, "msg": "Error in getting hotels"}
