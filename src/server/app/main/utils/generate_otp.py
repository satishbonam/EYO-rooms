from twilio.rest import Client
import math
import random


def generate_random():
    digits = "0123456789"
    OTP = ""
    for i in range(4):
        OTP += digits[int(math.floor(random.random() * 10))]

    return OTP


def generate_otp(number):
    account_sid = 'ACfbc945f6da5d6e8258ebd43cf10c9d6b'
    auth_token = '6bec1d119404ded30c950ac0daa3f589'

    client = Client(account_sid, auth_token)
    otp = generate_random()

    message = client.messages.create(
        from_='+12029723786',
        body="EYO login OTP: "+otp,
        to='+91'+number
    )

    return True, otp
