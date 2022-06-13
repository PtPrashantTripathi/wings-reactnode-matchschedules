const mongoose = require("mongoose");
const Fixture = require("../../src/models/fixture");

const fixtures = [
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "CSK",
    team2: "MI",
    venue: "Delhi",
    date: "2021-05-23"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "RCB",
    team2: "SRH",
    venue: "Mumbai",
    date: "2021-05-24"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "PBKS",
    team2: "SRH",
    venue: "Chennai",
    date: "2021-05-26"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "RR",
    team2: "DC",
    venue: "Bengaluru",
    date: "2021-05-28",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "RCB",
    team2: "CSK",
    venue: "Kolkata",
    date: "2021-05-29",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "CSK",
    team2: "DC",
    venue: "Bengaluru",
    date: "2021-05-31",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "KKR",
    team2: "DC",
    venue: "Mumbai",
    date: "2021-06-01",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    team1: "MI",
    team2: "PBKS",
    venue: "Bengaluru",
    date: "2021-06-02",
  },
];

const setUpDataBase = async () => {
  await Fixture.deleteMany();
  fixtures.forEach((fixture) => {
    new Fixture(fixture).save();
  })
};


module.exports = {
  fixtures,
  setUpDataBase,
};