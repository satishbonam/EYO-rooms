# API Guidelines
This guide contains instructions on the format of API request body and response body.

## Headers
Schema for headers,

```
{
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer <token>",
    ...
}
```
`'Content-Type' key is compulsory for all the header bodies.`
## POST Method
This will have a request body and response body. Please note the schema of both the data packets.

### Request Body 
It contains the details sent from frontend to backend for response data. Request body should be in the following schema:

```
{
    "action": "get_all_users",
    "tzo": 330,
    ...
}
```

`'action' key is compulsory for all the request bodies.`

### Response Body
It contains the details sent from backend to frontend. Response body should be in the following schema.

```
{
    "comment": "Login Successful",
    "data": {
        "name": "John",
        "age" : 23
    },
    ...
}
```

`'comment' key is compulsory for all the response bodies.`


## GET Method 
This will have a response body. Use the same format of the schema as for POST method. 

## Status Code
Please make sure you are handling different status codes as required with appropriate messages. Some common status codes are:

- 200 : Status OK
- 201 : Created
- 204 : No content
- 403 : Access Denied
- 404 : Not Found
- 409 : Conflict
- 500 : Server Error
- 504 : Gateway Timeout

Please visit this [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for more status codes and details.
 

# Note
Request body and Response body will always be JSON encoded, when transferring.