let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");
absolutePath = __dirname + "/views/index.html";

// Middleware has to come before everything else

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  });


app.get("/", (req, res) => {
    res.sendFile(absolutePath);
    }
);

app.get("/json", (req, res) => {
    (process.env.MESSAGE_STYLE === "uppercase")
    ? res.json({"message": "HELLO JSON"})
    : res.json({"message": "Hello json"})
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
  }, (req, res) => {
    res.json({time: req.time});
  });

  app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word});;
  });



























 module.exports = app;
