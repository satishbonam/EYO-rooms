import jwt
from config import key
import datetime
from app.main.models import db
from ..models.AuthenticationModel import BlacklistTokenModel


# This checks if the token is valid or not
def token_validate(auth_token):

    # Checking for blacklisted token
    query = BlacklistTokenModel.query.filter(
        BlacklistTokenModel.token == auth_token).first()

    if query == None:

        token_data = jwt.decode(auth_token, key)

        if datetime.datetime.strptime(token_data['exp_datetime'], '%Y-%m-%d %H:%M:%S.%f') >= datetime.datetime.utcnow():
            return True, token_data
        else:
            return False, token_data

    else:
        return False, auth_token
