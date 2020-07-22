# api-guide

## /register

### Request Body

```
{
    "name":"",
    "email":"",
    "username":"",
    "password":"",
    "mobile":"",
}
```

### Response Body

```
{
   'status': True,
   'msg': "Registration Successfull"
}
```

```
{
   "status":"false",
   "msg":"User exists or incorrect details"
}
```

## /login

### Request Body

```
{
    "email/username/mobile":"",
    "password":"",
}
```

### Response Body

```
{
   'status': True,
   'msg': "Login Successfull"
   'token':"sfsdfgfhhefgdfgdfgsd"
}
```

```
{
   "status":"false",
   "msg":"incorrect credentials"
}
```

## /login/otp_generate

### Request Body

```
{
	"mobile":"<ten digit mobile number>"
}
```

### Response Body

```
{
    "msg": "OTP generated",
    "status": true
}
```

```
{
    "msg": "mobile number not registered",
    "status": false
}
```

## /login/otp_verify

### Request Body

```
{
	"mobile":"<ten digit mobile number",
	"otp":"XXXX"
}
```

### Response Body

```
{
    "msg": "Login Successful",
    "status": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

```
{
    "msg": "Incorrrect OTP",
    "status": false
}
```
