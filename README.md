# Week 6 - RESTful Groceries
- As discussed in the video the current status of the app should do the CRUD operation and have RESTful services for persisting data.

## Setup
```bash
# install mongodb
brew install mongodb-community@7.0
# start server, dont' start via mongod
brew services start mongodb-community@7.0
# database
mongosh groceries
# stop server
brew services stop mongodb-community@7.0
```

## Start Sever
```bash
cd express_server
npm install
npm start

# test

# get, use browser
http://localhost:8080/api/groceries

# add
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"Milk","quantity":"3"}' \
  http://localhost:8080/api/groceries

# update
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"name":"Bread","quantity":"20000"}' \
  http://localhost:8080/api/groceries/6568084ea9d3b72c54f01a6f

# delete
curl --header "Content-Type: application/json" \
  --request DELETE \
  http://localhost:8080/api/groceries/6568032a2937fd83cb62c17c
```

