# Hotel-management

Description: This is an api that registers users and allows them them to create different types of rooms. By default, a registered and logged in user can only create rooms. Only admin can create, edit or delete diffferent room types.

## Requirements

1. Clone the repo
2. Run the command npm run dev to install all the required packages used

## Usage

1. Register and log in either as a user or admin. Note that by default, users are registered as guests that can only create rooms
2. Use the token generated for authentication and authorization
3. Test by <https://hotel-management-api-yhen.onrender.com>

## [API_DOCUMENTATION](./Hotel-Room%20Api.postman_collection.json)

## Summary of the documentation as shown in the link

## Hotel-Room Api

## Description

This is a hotel-management api that allows for creation of rooms, room-types, users and also other endpoints as well.

### Things To Know

1. By default, all users created are assigned guest roles that can only create rooms, fetch room-types and perform all other activities EXCEPT creating, editing and deleting room-types which only the admin can do.
2. To login as an admin, you need to use the following credentials: "email": adminchinyere98@gmail.com, "password": adminchi98234.
3. Before performing any operation apart from creating and login users, you need to authenticate. To do this, you need to get the token from login and put it in the bearer as shown below in the endpoints.
4. Please note that you can only update, read and delete the current user logged in based on the token. YOU CAN NOT SEE ALL USERS ONLY THE LOGGED IN USER.

## POST

### Create Room

<https://hotel-management-api-yhen.onrender.com/api/v1/rooms>
Description

This is a post end point that allows a user to create a room.

### Things To know

To create a room, you need to do the following:

1. You need to be authenticated. Both users and admin can create a room but must first be authenticated.
2. You need to have a roomTypeId. To get a roomTypeId, you need to fetch all the room types by using the fetch room types endpoints. Then copy the id and put it as shown in the example below:

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjOGMzYjEwODY2MmQ1ZTU4ZTI1ZTIiLCJpYXQiOjE2Nzc0OTU0MDh9.9N6em-9rpWY8jQfqWKHOEEavL_dKeXD_5DMN4MQIx8g

Body
raw (json)
json
{
    "name" : "Penthouse",
    "roomType" : "63fc8b60108662d5e58e25df",
    "price": 10000
}

### Create RoomType

<https://hotel-management-api-yhen.onrender.com/api/v1/room-types>

### Description

This is a post end point that allows a user to create a room-type.

### Things To know

To create a room-type, you need to do the following:

1. You need to be authenticated and authorized. Only admin can create a room-type but must first be logged in as an admin.
EndFragment

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjODYzNDEwODY2MmQ1ZTU4ZTI1YjYiLCJpYXQiOjE2Nzc0OTQ5NTd9.RwVnzuUSLelN9jRjtdumJVBsCCDWjQ2hCRHEpL4J6y8

Body
raw (json)
json
{
    "name": "Double room"
}

## GET

### Fetch All Rooms

<https://hotel-management-api-yhen.onrender.com/api/v1/rooms>
StartFragment

### Description

This is a get end point that allows a user to fetch all rooms.

### Things To know

To fetch all rooms, you need to do the following:

1. You need to be authenticated. Both users and admin can fetch a room but must first be authenticated.
2. You can add optional params such as search by name, room-type or min and max-price
EndFragment

### Request Headers

Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjOGMzYjEwODY2MmQ1ZTU4ZTI1ZTIiLCJpYXQiOjE2Nzc0OTYyOTV9.H-QPjwBFNPrfRBqwvcQvzeLn8fi_q3C-brYtkPlwp70

### GET

### Fetch All Room Types

<https://hotel-management-api-yhen.onrender.com/api/v1/room-types>

### Description

This is a get end point that allows a user to fetch all room-types.

Things To know

To fetch all room-types, you need to do the following:

1. You need to be authenticated. Both users and admin can fetch room-types but must first be authenticated.
Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiZmVjYmFlZDU4OGZkYzA4N2I1OWUiLCJpYXQiOjE2Nzc0NTkzNjN9.Shq20btdSHPG6p6uXURbOfLN88BpFOuw4M9JN1EhE70

## GET

## Fetch Single Room by Id

<https://hotel-management-api-yhen.onrender.com/api/v1/rooms/63fc8d3b108662d5e58e25ee>

### Description

This is a get end point that allows a user to fetch a single room by id.

### Things To know

To get a room by id, you need to do the following:

1. You need to be authenticated. Both users and admin can get a room by id but must first be authenticated.
2. You need to have a room Id. To get a room Id, you need to fetch all the room by using the fetch room endpoints. Then copy the id and put it as shown in the example below
Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjOGMzYjEwODY2MmQ1ZTU4ZTI1ZTIiLCJpYXQiOjE2Nzc0OTYyOTV9.H-QPjwBFNPrfRBqwvcQvzeLn8fi_q3C-brYtkPlwp70

### GET

### Fetch Single RoomType by id

<https://hotel-management-api-yhen.onrender.com/api/v1/room-types/63fc8d3b108662d5e58e25ee>
StartFragment

### Description

This is a get end point that allows a user to fetch a room-type by id.

### Things To know

To get a room-type by id, you need to do the following:

1. You need to be authenticated. Both users and admin can get a room-type by id but must first be authenticated.
2. You need to have a room-type Id. To get a room-type Id, you need to fetch all the room-type by using the fetch room-type endpoints. Then copy the id and put it as shown in the example below
EndFragment

### PATCH

### Update Room by Id

<https://hotel-management-api-yhen.onrender.com/api/v1/rooms/63fc8d3b108662d5e58e25ee>
StartFragment

### Description

This is a patch end point that allows a user to update a single room by id.

### Things To know

To update a room by id, you need to do the following:

1. You need to be authenticated. Both users and admin can update a room by id but must first be authenticated.
2. You need to have a room Id. To get a room Id, you need to fetch all the room by using the fetch room endpoints. Then copy the id and put it in the url as shown in the endpoint above
3. Then go the body and update what you want to be updated as shown below.
EndFragment

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjOGMzYjEwODY2MmQ1ZTU4ZTI1ZTIiLCJpYXQiOjE2Nzc0OTY3NDd9.c65aGIKm6LcnAAlYGkvh7EXXfkQmP7AySFgh1n1tEMI

Body
raw (json)
json
{
    "price": 11000
}

### PATCH

### Update Room Type by Id

<https://hotel-management-api-yhen.onrender.com/api/v1/room-types/63fc8d3b108662d5e58e25ee>

### Description

This is a patch end point that allows an admin to update a single room-type by id.

### Things To know

To update a room-type by id, you need to do the following:

1. You need to be authenticated and authorized. Only admin can update a room-type by id but must first be logged in as an admin.
2. You need to have a room-type Id. To get a room-type Id, you need to fetch all the room-type by using the fetch room-type endpoints. Then copy the id and put it in the url as shown in the endpoint above
3. Then go the body and update what you want to be updated as shown below.

### DELETE

### Delete Room By Id

<https://hotel-management-api-yhen.onrender.com/api/v1/rooms/63fc8d3b108662d5e58e25ee>
StartFragment

### Description

This is a delete end point that allows a user to delete a single room by id.

### Things To know

To delete a room by id, you need to do the following:

1. You need to be authenticated. Both users and admin can delete a room by id but must first be authenticated.
2. You need to have a room Id. To get a room Id, you need to fetch all the room by using the fetch room endpoints. Then copy the id and put it in the url as shown in the endpoint above
EndFragment

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjOGMzYjEwODY2MmQ1ZTU4ZTI1ZTIiLCJpYXQiOjE2Nzc0OTY3NDd9.c65aGIKm6LcnAAlYGkvh7EXXfkQmP7AySFgh1n1tEMI

### DELETE

### Delete RoomType by id

<https://hotel-management-api-yhen.onrender.com/api/v1/room-types/63fc8d3b108662d5e58e25ee>

### Description

This is a delete end point that allows an admin to delete a single room-type by id.

### Things To know

To delete a room-type by id, you need to do the following:

1. You need to be authenticated and authorized. Only admin can delete a room-type by id but must first be logged in as an admin.
2. You need to have a room-type Id. To get a room-type Id, you need to fetch all the room-type by using the fetch room-type endpoints. Then copy the id and put it in the url as shown in the endpoint above

### POST

### Create User

<https://hotel-management-api-yhen.onrender.com/api/v1/users>

### Description

This is a post end point that allows to create a user.

### Things To know

To create a user, you need to do the following:

1. Both users and admin can create a user. Aunthentication is not required.
2. To create a user, pls input the following fields: "name": "your name", "email": "your email", "password": "your password".
3. Please note that YOU CAN NOT REGISTER THE SAME EMAIL MORE THAN ONCE.
4. On creating a user, you would get a token that can be used to login and perform other activities
5. Also note by default, a user is created as a guest.
Request Headers
Content-Type
application/json

Body
raw (json)
json
{
    "name": " Guest Chinyere",
    "email": "guestchinyere98@gmail.com",
    "password": "guestchi98234"

}

### POST

### Login User

<https://hotel-management-api-yhen.onrender.com/api/v1/users/login>
StartFragment

### Description

This is a post end point that allows to login a user.

### Things To know

To login a user, you need to do the following:

1. Both users and admin can login. Aunthentication is not required.
2. To login a user, pls input the following fields: "email": "your email", "password": "your password".
3. On login a user, you would get a token that can be used to perform other activities

Body
raw (json)
json
{
      "email": "guestchinyere98@gmail.com",
    "password": "guestchi98234"
}

## GET

### Read User Profile

<https://hotel-management-api-yhen.onrender.com/api/v1/users/me>
StartFragment

### Description

This is a get end point that allows a user to fetch ONLY his own profile.

### Things To know

To get your own profile, you need to do the following:

1. You need to be authenticated. Both users and admin can get their individual profile but must first be authenticated.
2. You need to be logged in.
3. The token gotten from logging in is what would be used to authenticate your profile.
EndFragment

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjOGMzYjEwODY2MmQ1ZTU4ZTI1ZTIiLCJpYXQiOjE2Nzc0OTY3NDd9.c65aGIKm6LcnAAlYGkvh7EXXfkQmP7AySFgh1n1tEMI

### PATCH

### Update User

<https://hotel-management-api-yhen.onrender.com/api/v1/users/me>
StartFragment

### Description

This is a patch end point that allows a user to update ONLY his own profile.

### Things To know

To update your own profile, you need to do the following:

1. You need to be authenticated. Both users and admin can update their individual profile but must first be authenticated.
2. You need to be logged in.
3. The token gotten from logging in is what would be used to authenticate your profile.
4. Then go the the body and update whatever you want to update.
EndFragment

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzYzY1YTc2MzFiMDZlYzdkMWY2ZmUiLCJpYXQiOjE2NzY5MjA0MzR9.7GuOzUST4ct-6cowIA0T-JDPxv_sNrJLQxCYnEcak58

Body
raw (json)
json
{
    "email": "chinyerejedidiah56@gmail.com"
}

### DELETE

### Delete User

<https://hotel-management-api-yhen.onrender.com/api/v1/users/me>
StartFragment

### Description

This is a delete end point that allows a user to delete ONLY his own profile.

### Things To know

To delete your own profile, you need to do the following:

1. You need to be authenticated. Both users and admin can delete their individual profile but must first be authenticated.
2. You need to be logged in.
3. The token gotten from logging in is what would be used to authenticate your profile and then delete it.
EndFragment

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzYmZkYjA4NTJhYzU0MmExY2RlYTEiLCJpYXQiOjE2NzY5MTg3ODN9.GO7KYZK0TB9RSJb-vosyNaNwmyzgC77bI-GHkWofle8
