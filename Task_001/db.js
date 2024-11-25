const mongoose = require("mongoose");

const url = process.env.MONGO_URL;

mongoose.connect(url);

const connection = mongoose.connection;

connection.on("connection", () => {
  console.log("mongdb connected");
});

connection.on("error", () => {
  console.error(error);
});
