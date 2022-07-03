const express = require("express");
const Fixture = require("../models/fixture");

const router = new express.Router();

// Your code goes here
// Write a route to get fetch the matches i.e., GET /fixtures
// You should also implement below filters
//   * filter to list matches that will be held between given start and end date
//   * filter for venue
router.get("/fixtures", (req, res) => {
    let query = {};
    if (req.query.end_date && req.query.start_date) {
        query.date = { $gte: req.query.start_date, $lte: req.query.end_date };
    }
    else{
        if (req.query.start_date) {
            query.date = { $gte: req.query.start_date };
        }
        if (req.query.end_date) {
            query.date = { $lte: req.query.end_date };
        }
    }
    if (req.query.venue) {
        query.venue = req.query.venue;
    }

    Fixture.find(query)
        .then((data) => {
            res.status(200).json({ count: data.length, records: data });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});
// Write a route to create a match fixture i.e., POST /fixtures
// POST route will take all of these below params
//   * team1
//   * team2
//   * venue
//   * date
router.post("/fixtures", (req, res) => {
    const fixture = new Fixture({
        team1: req.body.team1,
        team2: req.body.team2,
        venue: req.body.venue,
        date: req.body.date,
    });
    fixture
        .save()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ error: err });
        });
});

module.exports = router;
