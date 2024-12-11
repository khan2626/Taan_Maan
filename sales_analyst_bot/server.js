const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");

const fileUploadRoutes = require("./routes/fileUpload.route");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret",
    resave: false,
    saveUninitialized: true,
  })
);

//cors handling
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from your frontend
  res.setHeader("Access-Control-Allow-Methods", "POST"); // Specify allowed HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "*"); // Specify allowed headers
  next();
});

app.use("/me", fileUploadRoutes);

app.listen(PORT, () => {
  try {
    console.log(`app running in port ${PORT}`);
  } catch (error) {
    console.log("Express error:", error);
  }
});
