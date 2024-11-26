const express = require("express");
const User = require("../models/userModels");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      dob,
      residentialAddress,
      sameAsResident,
      permanentAddress,
      document,
    } = req.body;
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 18) {
      res.status(400).json({ message: "Age must be greater than 18" });
    }
    if (!document || document.length < 2) {
      res.status(400).json({ message: "document must be more than two" });
    }
    const userData = new User({
      firstName,
      lastName,
      email,
      dob,
      permanentAddress,
      residentialAddress,
      sameAsResident,
      document,
    });
    await userData.save();
    res.status(200).json({ message: "form submitted", userData });
  } catch (error) {
    console.log("Error posting user:", error);
  }
});

module.exports = router;
