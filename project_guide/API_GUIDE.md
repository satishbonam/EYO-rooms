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
