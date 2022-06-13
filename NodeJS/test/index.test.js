const request = require("supertest");
const app = require("../src/app");
const { setUpDataBase, fixtures } = require("./utils/testDB");
const mongoose = require("mongoose");

beforeEach(setUpDataBase);

afterAll(async (done) => {
  await mongoose.disconnect();
  done();
});

// getting all the fixtures
test("View all the fixtures", async () => {
  const response = await request(app)
    .get("/fixtures")
    .expect(200);
  expect(response.body.count).toBe(8);
  expect(response.body.records.length).toBe(8);
  expect(response.body.records[0].venue).toBe(fixtures[0].venue);
  expect(response.body.records[1].team1).toBe(fixtures[1].team1);
  expect(response.body.records[2].team2).toBe(fixtures[2].team2);
  expect(response.body.records[3].venue).toBe(fixtures[3].venue);
  expect(response.body.records[4].team2).toBe(fixtures[4].team2);
  expect(response.body.records[5].team2).toBe(fixtures[5].team2);
  expect(response.body.records[6].venue).toBe(fixtures[6].venue);
  expect(response.body.records[7].team2).toBe(fixtures[7].team2);
});

// getting all the fixture from a venue
test("View all the fixtures from a venue", async () => {
  const response = await request(app)
    .get("/fixtures")
    .query({
      venue: "Mumbai",
    })
    .expect(200);
  expect(response.body.count).toBe(2);
  expect(response.body.records.length).toBe(2);
  expect(response.body.records[0].venue).toBe(fixtures[1].venue);
  expect(response.body.records[0].team2).toBe(fixtures[1].team2);
  expect(response.body.records[1].venue).toBe(fixtures[6].venue);
  expect(response.body.records[1].team1).toBe(fixtures[6].team1);
});

// getting all the fixture from a start date
test("View all the fixtures from a start date", async () => {
  const response = await request(app)
    .get("/fixtures")
    .query({
      start_date: "2021-05-31",
    })
    .expect(200);
  expect(response.body.count).toBe(3);
  expect(response.body.records.length).toBe(3);
  expect(response.body.records[0].venue).toBe(fixtures[5].venue);
  expect(response.body.records[0].team2).toBe(fixtures[5].team2);
  expect(response.body.records[1].venue).toBe(fixtures[6].venue);
  expect(response.body.records[1].team1).toBe(fixtures[6].team1);
  expect(response.body.records[2].venue).toBe(fixtures[7].venue);
  expect(response.body.records[2].team1).toBe(fixtures[7].team1);
});

// getting all the fixture till the end date
test("View all the fixtures till the end date", async () => {
  const response = await request(app)
    .get("/fixtures")
    .query({
      end_date: "2021-05-24",
    })
    .expect(200);
  expect(response.body.count).toBe(2);
  expect(response.body.records.length).toBe(2);
  expect(response.body.records[0].venue).toBe(fixtures[0].venue);
  expect(response.body.records[0].team2).toBe(fixtures[0].team2);
  expect(response.body.records[1].venue).toBe(fixtures[1].venue);
  expect(response.body.records[1].team1).toBe(fixtures[1].team1);
});

// getting all the fixture from start date till end date from a venue
test("View all the fixtures till the end date", async () => {
  const response = await request(app)
    .get("/fixtures")
    .query({
      start_date: "2021-05-28",
      end_date: "2021-06-02",
      venue: "Bengaluru",
    })
    .expect(200);
  expect(response.body.count).toBe(3);
  expect(response.body.records.length).toBe(3);
  expect(response.body.records[0].venue).toBe(fixtures[3].venue);
  expect(response.body.records[0].team2).toBe(fixtures[3].team2);
  expect(response.body.records[1].venue).toBe(fixtures[5].venue);
  expect(response.body.records[1].team1).toBe(fixtures[5].team1);
  expect(response.body.records[2].venue).toBe(fixtures[7].venue);
  expect(response.body.records[2].team1).toBe(fixtures[7].team1);
});

// Adding a fixture
test("Insert a fixture", async () => {
  const response = await request(app)
    .post("/fixtures")
    .send({
      team1: "PBKS",
      team2: "MI",
      venue: "Mohali",
      date: "2021-05-30"
    })
    .expect(200);
  expect(response.body).toHaveProperty('_id');
  expect(response.body.team1).toEqual("PBKS");
  expect(response.body.team2).toEqual("MI");
  expect(response.body.venue).toEqual("Mohali");
});

// Adding a fixture on the same date but for different teams
test("Insert a fixture", async () => {
  const response = await request(app)
    .post("/fixtures")
    .send({
      team1: "RR",
      team2: "MI",
      venue: "Mohali",
      date: "2021-05-24"
    })
    .expect(200);

  expect(response.body).toHaveProperty('_id');
  expect(response.body.team1).toEqual("RR");
  expect(response.body.team2).toEqual("MI");
  expect(response.body.venue).toEqual("Mohali");
});
