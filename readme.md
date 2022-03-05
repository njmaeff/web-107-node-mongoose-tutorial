# Mongoose Tutorial
Simple REST endpoint using express and the [Mongoose ORM](https://mongoosejs.com/).

The tutorial uses [Express Routes and Controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) to manage the complexity of a REST API. [Controllers](./src/controllers/) define the business logic, [models](./src/models/) define the document structure in the database, and [routes](./src/routes/) are how we expose our business logic (controllers) as an API.

You will find a basic CRUD (Create, Read, Update, Delete) route for a blog in the [blog.ts](src/routes/blog.ts) file.

## Install
This project uses the [yarn](https://yarnpkg.com/) package manager.

```bash
# Install yarn
npm install -g yarn

# install dependencies with the yarn package manager
yarn install
```

## Build

```bash
# start mongodb docker container
yarn start-db 

# compile typescript
yarn build

# add demo data
yarn seed

# start express server
yarn start
```

## Examples

See `GET`, `PUT`, `DELETE`, and `POST` examples in the [requests.http](./requests.http) file.

Below you can test the endpoint with the `curl` command.

```bash
# GET blog post by ID

curl -X GET --location "http://localhost:8080/api/blog/29a95f357e10e2b0ffdd4ccb" \
    -H "Accept: application/json"


# GET all blogs posts
curl -X GET --location "http://localhost:8080/api/blogs" \
    -H "Accept: application/json"


# PUT update blog post by ID
curl -X PUT --location "http://localhost:8080/api/blog/29a95f357e10e2b0ffdd4ccb" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d "{
          \"title\": \"updated title\"
        }"


# DELETE blog post by ID
curl -X DELETE --location "http://localhost:8080/api/blog/29a95f357e10e2b0ffdd4ccb" \
    -H "Accept: application/json"


# POST (Create blog post)
curl -X POST --location "http://localhost:8080/api/blog" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d "{
          \"title\": \"My Blog Title\",
          \"content\": \"This is my blog\",
          \"author\": \"Nik Jmaeff\"
        }"


```
