const express = require("express");
const connection = require("./db.js");
const userRoute = require("./routes/userRoutes");

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from your frontend
  res.setHeader("Access-Control-Allow-Methods", "POST"); // Specify allowed HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "*"); // Specify allowed headers
  next();
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  try {
    console.log(`server running on port ${PORT}`);
  } catch (err) {
    console.log("Error: ", err.message);
  }
});
