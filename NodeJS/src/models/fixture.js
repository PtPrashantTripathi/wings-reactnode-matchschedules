const mongoose = require("mongoose");

//set validations for the fields as given in the instruction file

const fixture_schema = new mongoose.Schema({
  team1: {
    type: String,
    required: true,
  },
  team2: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

fixture_schema.methods.toJSON = function () {
  const fixture = this;
  const fixtureObject = fixture.toObject();
  delete fixtureObject.__v;
  return fixtureObject;
};

const Fixture = mongoose.model("Fixture", fixture_schema);

module.exports = Fixture;