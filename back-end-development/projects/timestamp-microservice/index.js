// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// PROJECT: API takes either UNIX or UTC time code and responds with UNIX and UTC time code

// Gets current time and returns it in UNIX and UTC time code
app.get("/api", (req, res) => {
    let current = new Date();

    res.json({unix: current.getTime(),
            utc: current.toUTCString()});
});

// Receives input and tries to check if it's a valid timecode. If so, it returns it
app.get("/api/:timecode", (req, res) => {
    let date = new Date(req.params.timecode);

    if (date.toString() === "Invalid Date") {
        date = new Date(+req.params.timecode) // Attempts to transform to UNIX code
        if (date.toString() === "Invalid Date") res.json({error: "Invalid Date"});
    };
    res.json({unix: date.getTime(),
            utc: date.toUTCString()})
});


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
