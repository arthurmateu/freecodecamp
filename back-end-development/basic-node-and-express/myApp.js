let express = require('express');
let app = express();
require('dotenv').config()


console.log("Hello World");

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
    // res.send("Hello Express")
    res.sendFile(absolutePath);
    }
);

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    (process.env.MESSAGE_STYLE === "uppercase")
    ? res.json({"message": "HELLO JSON"})
    : res.json({"message": "Hello json"})
});





























 module.exports = app;
