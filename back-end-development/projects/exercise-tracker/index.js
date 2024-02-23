const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
//Database connection
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.DB_URL)

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

/*
    PROJECT: API that interacts with a database
        POST /api/users                                 -> Creates a new user. 
                                                        Returns json {username, _id: <randomly_generated>}
        POST /api/users/:_id/exercises                  -> Creates a new exercise. 
                                                        Returns json {_id, username, date, duration, description}. 
                                                            When date isn't specified, assumes moment of post
        GET /api/users/:_id/logs                        -> Returns logs of activities in the following json format
                                                        {_id, username, count: n, log: {0, 1, ..., n}}
                                                            <count> variable is the lenght of logged exercises
            /api/users/:_id/logs?[from][&to][&limit]    -> Filters logs
*/

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
