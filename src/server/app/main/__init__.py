import logging
from datetime import datetime as dt
from flask import Flask, request, Blueprint
from app.main.routes import add_resources, register_blueprints
from flask_cors import CORS
from app.main.models import db
from flask_migrate import Migrate

from config import config_by_name


def create_app(config_name):

    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    app.config.from_object(config_by_name[config_name])
    add_resources(app)
    register_blueprints(app)

    db .init_app(app)
    migrate = Migrate(app, db, compare_type=True)
    return app
