const mongoose = require("mongoose");
const Fixture = require("../models/fixture");
require("./index");

const fixtureOne = {
  _id: new mongoose.Types.ObjectId(),
  team1: "CSK",
  team2: "MI",
  venue: "Delhi",
  date: "2021-05-23"
};

const fixtureTwo = {
  _id: new mongoose.Types.ObjectId(),
  team1: "RCB",
  team2: "SRH",
  venue: "Mumbai",
  date: "2021-05-24"
};

const fixtureThree = {
  _id: new mongoose.Types.ObjectId(),
  team1: "PBKS",
  team2: "SRH",
  venue: "Chennai",
  date: "2021-05-26"
};

const fixtureFour = {
  _id: new mongoose.Types.ObjectId(),
  team1: "RR",
  team2: "DC",
  venue: "Bengaluru",
  date: "2021-05-28"
};

const fixtureFive = {
  _id: new mongoose.Types.ObjectId(),
  team1: "RCB",
  team2: "CSK",
  venue: "Kolkata",
  date: "2021-05-29"
};

const setUpDataBase = async () => {
  await Fixture.deleteMany();
  await new Fixture(fixtureOne).save();
  await new Fixture(fixtureTwo).save();
  await new Fixture(fixtureThree).save();
  await new Fixture(fixtureFour).save();
  await new Fixture(fixtureFive).save();
  await mongoose.disconnect();
};

setUpDataBase();