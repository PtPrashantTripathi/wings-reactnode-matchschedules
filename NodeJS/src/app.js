const express = require("express");
const routers = require("./routers");
require("./db");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Methods", "DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(routers);

module.exports = app;