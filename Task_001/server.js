const express = require("express");
const connection = require("./db.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  try {
    console.log(`server running on port ${PORT}`);
  } catch (err) {
    console.log("Error: ", err);
  }
});
