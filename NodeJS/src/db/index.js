const mongoose = require("mongoose");

// Connection to Mongo Database
mongoose.connect("mongodb://127.0.0.1:27017/fixtures-db", {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
