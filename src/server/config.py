import os


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_fullStack_project_eyo_rooms')
    DEBUG = False


class DevelopmentConfig(Config):

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql://admin:143drawing@database-test.cfdblff4exgl.ap-south-1.rds.amazonaws.com/eyo_rooms'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    ENV = 'development'
    SQLALCHEMY_ECHO = True


class ProductionConfig(Config):
    DEBUG = False


config_by_name = dict(
    dev=DevelopmentConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY
