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
    "msg": "Login Successful",
    "status": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user_data": {
        "email": "satish.b.s.kumar@gmail.com",
        "name": "satish"
    }
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user_data": {
        "email": "satish.b.s.kumar@gmail.com",
        "name": "satish"
    }
}
```

```
{
    "msg": "Incorrrect OTP",
    "status": false
}
```

## /login/oauth

### Request Body

```
{
  "name":"xxxx",
  "email":"email@gmail.com",
  "provider":"google",
  "access_token":"dcsfdgfhgfjdfghsdgsdfg"
}
```

### Response Body

```
{
    "msg": "Login Successful",
    "status": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user_data": {
        "email": "satish.b.s.kumar@gmail.com",
        "name": "satish"
    }
}
```

```
{
    "msg": "Incorrrect Credentials",
    "status": false
}
```

## /logout

### Request Header

```
{
  "auth_token":"dcsfdgfhgfjdfghsdgsdfg"
}
```

### Response Body

```
{
    "msg": "Logout Successful",
    "status": true
}
```

## /bill_data

### Request body

#### required:hotel_id,check_in,check_out

```
{
  "hotel_id":"",
  "room_id":"",
  "check_in":"",
  "check_out":"",
  "no_of_guests":"",
  "no_of_rooms":""
  "membership":<boolean>
}
```

### Response Body

```
{
    "rooms":[{"id":"1","room_type":"<type>","size":"145","actual_price":"","discount_price":"","discount":""},
            {"id":"2","room_type":"<type>","size":"145","actual_price":"","discount_price":"","discount":""},
            {"id":"3","room_type":"<type>","size":"145","actual_price":"","discount_price":"","discount":""}]
    "selected_room":{
                        "id":1,
                        "rooms_available":"",
                        "no_of_rooms":""
                        "no_of_guests":"",
                        "actual_price":"",
                        "discounted_price":"",
                        "discount":"",
                        offer:{"membership":true,"savings":""}
                        "check_in":"",
                        "check_out":""

                     }
}
```

## /entity

### Request body

#### required:hotel_id

```
{
  "hotel_id":"",
}
```

### Response Body

```
{
    "id":""
    "title":""
    "location":""
    "rating":""
    "no_of_ratings":""
    "description":""
    "amenities":""
    "hotel_policy":""
}
```

## /recommendations

### Request params

```
{
  all filter params
}
```

### Response Body

```
{
    "data":[{"id":"","title":"","location":"","rating":"","no_of_ratings":"","description":"","amenities":"","hotel_policy":""},...20-items]
}
```

## /reviews

### Request body

#### required:hotel_id

```
{
  "hotel_id":"",
}
```

### Response Body

```
{
    "avg_rating":"",
    "no_of_ratings:"",
    reviews:[{"user_name":"","is_verified":"","date":"","rating":"","comment":""}...20-reviews]
}
```
