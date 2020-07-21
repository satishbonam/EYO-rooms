# import resprctive blueprints and flask REstful resources
from .blueprint_test import bp
from app.main import api



def add_resources(app):
    """
    Method to add resources to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    


def register_blueprints(app):
    """
    Method to add blueprints to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    app.register_blueprint(bp)
