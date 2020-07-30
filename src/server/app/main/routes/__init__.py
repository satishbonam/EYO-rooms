# import resprctive blueprints and flask REstful resources
from flask_restful import Api
from flask import Flask, request, Blueprint
from .Authentication import Register, LoginOtpGenerate, UserLogin, LoginOtpVerify, OauthLogin, UserLogout
from .Listing import HotelListing
from .Entity import Entity, BillData, Recommendations, Reviews
from .Payment import PaymentInitialize


api_blueprint = Blueprint('api', __name__)
api = Api(api_blueprint)


def add_resources(app):
    """
    Method to add resources to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(Register, '/register')
    api.add_resource(UserLogin, '/login')
    api.add_resource(LoginOtpGenerate, '/login/otp_generate')
    api.add_resource(LoginOtpVerify, '/login/otp_verify')
    api.add_resource(OauthLogin, '/login/oauth')
    api.add_resource(UserLogout, '/logout')
    api.add_resource(HotelListing, '/hotel_listing')
    api.add_resource(Entity, '/entity')
    api.add_resource(BillData, '/bill_data')
    api.add_resource(Recommendations, '/recommendations')
    api.add_resource(Reviews, '/reviews')
    api.add_resource(PaymentInitialize, '/payment')


def register_blueprints(app):
    """
    Method to add blueprints to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    app.register_blueprint(api_blueprint)
