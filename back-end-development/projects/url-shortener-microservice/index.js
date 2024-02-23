require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// Dependencies
const dns = require('dns')
const urlparser = require('url')
//Database connection
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.DB_URL)
const db = client.db("urlshortner")
const urls = db.collection("urls")

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// PROJECT: Posting URLs will save them into a database, and return a json with the corresponding number to access them later, using /api/shorturl/:number with the GET http method
app.post('/api/shorturl', function (req, res) {
    const url = req.body.url
    dns.lookup(urlparser.parse(url).hostname, async (err, address) => {
        if (!address) {
            res.json({ error: "invalid url" })
        } else {
            const urlCount = await urls.countDocuments({})
            const urlDoc = {
                url: url,
                short_url: urlCount
            }

            await urls.insertOne(urlDoc)
            res.json({
                original_url: url,
                short_url: urlCount
            })
        }
    })
});

app.get("/api/shorturl/:short_url", async (req, res) => {
    const shorturl = req.params.short_url
    const urlDoc = await urls.findOne({ short_url: +shorturl })
    res.redirect(urlDoc.url)
})

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
