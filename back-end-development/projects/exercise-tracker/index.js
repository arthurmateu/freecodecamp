const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// Database connection
const { Schema } = mongoose;
mongoose.connect(process.env.DB_URL);

// Schemas
const UserSchema = new Schema({
    username: String,
});
const ExerciseSchema = new Schema({
    uid: { type: String, required: true },
    description: String,
    duration: Number,
    date: Date,
});

const User = mongoose.model("User", UserSchema);
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// Middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

/*
    PROJECT: API that interacts with a database
        POST /api/users                                 -> Creates a new user. 
                                                        Returns json {username, _id: <object_id>}
             /api/users/:_id/exercises                  -> Creates a new exercise. 
                                                        Returns json {_id, username, date, duration, description}. 
                                                            When date isn't specified, assumes moment of post
        GET /api/users                                  -> List of all users
            /api/users/:_id/logs?[from][&to][&limit]    -> Returns logs of activities in the following json format
                                                        {_id, username, count: n, log: {0, 1, ..., n}}
                                                            <count> variable is the lenght of logged exercises
                                                        Accepts the following filters: [from][to][limit]
*/

app.post("/api/users", async (req, res) => {
    const userObj = new User({
        username: req.body.username,
    });

    try {
        const user = await userObj.save();
        res.json(user);
    } catch (err) {
        console.log(err);
    }
});

app.post("/api/users/:_id/exercises", async (req, res) => {
    const id = req.params._id;
    let { description, duration, date } = req.body;

    try {
        const user = await User.findById(id);
        if (user) {
            if (date) {
                date = new Date(date)
            } else date = new Date();

            const exerciseObj = new Exercise({
                uid: user.id,
                description,
                duration,
                date
            });
            const exercise = await exerciseObj.save();
            res.json({
                uid: user.id,
                username: user.username,
                date: new Date(exercise.date).toDateString(),
                duration: exercise.duration,
                description: exercise.description,
            });
        } else res.json({error: "User not found"});
    } catch (err) {
        console.log(err)
        res.json({error: "Failed operation"})
    }
});

app.get("/api/users", async (req, res) => {
    const users = await User.find({}).select("_id username");
    if (!users) {
        res.send("No users found");
    } else {
        res.json(users);
    }
});

app.get("/api/users/:_id/logs", async (req, res) => {
    const id = req.params._id;
    const { from, to, limit } = req.query;
    const user = await User.findById(id);
    let dateObj = {};

    if (!user) console.log("User not found");
    if (from) dateObj["$gte"] = new Date(from);
    if (to) dateObj["$lte"] = new Date(to);

    let filter = {
        uid: id,
    };
    if (from || to) {
        filter.date = dateObj;
    }

    const exercises = await Exercise.find(filter).limit(+limit ?? 100);

    const log = exercises.map((e) => ({
        description: e.description,
        duration: e.duration,
        date: e.date.toDateString(),
    }));

    res.json({
        _id: user._id,
        username: user.username,
        count: exercises.length,
        log,
    });
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
});