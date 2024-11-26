const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("mongdb connected");
});

connection.on("error", (error) => {
  console.error(error);
});

module.exports = connection;
