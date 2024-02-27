var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
const upload = multer()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

/*
    PROJECT: Microservice that analyses metadata of a client's file

    POST /api/fileanalyse - Returns json with elements {name, type, size} 
*/

app.post('/api/fileanalysis', upload.single(), (req, res) => {
    res.json({
        name: req.file.name,
        type: req.file.mimetype,
        size: req.file.size
    })
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Your app is listening on port ' + port)
});
