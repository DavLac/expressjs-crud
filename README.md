# Express.js CRUD

Database : MongoDB

## How to run
1. Run `docker-compose up` command on the same location that docker-compose.yml file. 
   It will run the app + a mongoDB database
2. Run a mongoDB database with the same settings as 
   docker-compose.yml file (refer to `mongodb-user` service) and run `npm start`

## Endpoints
- GET /users
- GET /users/:username
- POST /users
```
{
    "username": "john", 
    "password": "abc"
}
```
- PUT /users/:username
```
{
    "username": "john", 
    "password": "abc"
}
```
- DELETE /users/:username
