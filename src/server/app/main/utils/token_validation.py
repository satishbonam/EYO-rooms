import jwt
from app.main.settings import key
import datetime


# validate the jwt token
def token_validation(token):
    try:
        token_data = jwt.decode(token, key)
        if datetime.datetime.strptime(token_data['expire'], '%Y-%m-%d %H:%M:%S.%f') >= datetime.datetime.utcnow():
            return True, token_data
        else:
            return False, token_data
    except jwt.exceptions.DecodeError as e:
        return False, token
