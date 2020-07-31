from ..models.HotelListingModel import HotelCategoryModel, HotelModel
from ..models.AuthenticationModel import UserModel
from ..models.Transactions import TransactionsModel
from app.main.models import db
from config import key
import jwt
import datetime
from ..utils.db_save import db_save
import math
import json
import random
import razorpay
import uuid


# initialize payment
def payment_initialize(payload, token_data):
    print(token_data,"token data")
    try:
        new_transc = TransactionsModel(hotel_id=payload.get('hotel_id', "hotel_id"),
                                       room_id=payload.get(
                                           'room_id', "room_id"),
                                       check_in=payload.get(
                                           'check_in', "check_in"),
                                       check_out=payload.get(
                                           'check_out', "check_out"),
                                       booking_details=payload,
                                       isVerified=0,
                                       payment_details={}
                                       )

        db_save(new_transc)

        if token_data.get('email'):
            data_raw = UserModel().query.filter(
                UserModel.email == token_data.get("email")).first()
            print(data_raw.email)
        elif token_data.get('mobile'):
            data_raw = UserModel().query.filter(
                UserModel.mobile == token_data.get("mobile")).first()
        else:
            data_raw = UserModel().query.filter(
                UserModel.username == token_data.get("username")).first()

        client = razorpay.Client(
            auth=("rzp_test_PLk8LKPwxMUCZt", "BPxaDe4HcoeHc3nULevGIfEA"))

        razor_request = {
            "amount": str(payload['amount']),
            "currency": "INR",
            "receipt": str(uuid.uuid1()),
            "payment_capture": 1
        }

        res = client.order.create(data=razor_request)
        data_res = {
            "key": "rzp_test_PLk8LKPwxMUCZt",
            "currency": "INR",
            "order_id": res['id'],
            "name": data_raw.name,
            "email": data_raw.email,
            "mobile": data_raw.mobile,
            "amount": payload['amount']
        }

        return True, data_res

    except Exception as e:
        print(e)
        return False, ""
