const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5100;

app.get("/me", async (req, res) => {
  console.log("i am active");
  res.status(200).json({ message: "I am running slow" });
});

app.listen(PORT, () => {
  try {
    console.log(`app running in port ${PORT}`);
  } catch (error) {
    console.log("Express error:", error);
  }
});
