const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  file: { type: Buffer, require: true },
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  residentialAddress: {
    street1: { type: String, required: true },
    street2: { type: String, required: true },
  },
  permanantAddress: {
    street1: {
      type: String,
      required: function () {
        return !this.sameAsResident;
      },
    },
    street2: {
      type: String,
      required: function () {
        return !this.sameAsResident;
      },
    },
  },
  sameAsResident: { type: Boolean, default: false },
  document: [documentSchema],
});

const user = mongoose.model("users", userSchema);
