const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const users = [
    "Kyle",
    "Dan",
    "Brooks",
    "CJ"
];

app.get("/", (request, response) => {
    response.json({users});
});

app.post("/", (request, response) => {
    users.push(request.body.user);
    response.sendStatus(201);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening...");
});
