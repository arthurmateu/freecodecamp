let express = require('express');
let app = express();


console.log("Hello World");

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
    // res.send("Hello Express")
    res.sendFile(absolutePath);
    }
);
































 module.exports = app;