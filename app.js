const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const database = require("./database_connection");

app.get("/", (request, response) => {
    database("user").select("*").then(users => {
        response.json({users});
    })
});

app.post("/", (request, response) => {
    database("user").insert(request.body).then(user => {
        response.sendStatus(201);
    })
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening...");
});
