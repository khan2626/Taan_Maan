// const mongoose = require("mongoose");

// const documentSchema = new mongoose.Schema({
//   fileName: { type: String, required: true },
//   fileType: { type: String, required: true },
//   file: { type: Buffer, required: true },
// });

// const userSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true },
//   dob: { type: Date, required: true },
//   residentialAddress: {
//     street1: { type: String, required: true },
//     street2: { type: String, required: true },
//   },
//   sameAsResident: { type: Boolean, default: false },
//   permanentAddress: {
//     street1: {
//       type: String,
//       required: function () {
//         return !this.sameAsResident;
//       },
//     },
//     street2: {
//       type: String,
//       required: function () {
//         return !this.sameAsResident;
//       },
//     },
//   },

//   document: [documentSchema],
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;

const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  file: { type: Buffer, required: true },
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
  sameAsResident: { type: Boolean, default: false },
  permanentAddress: {
    street1: {
      type: String,
      required: function () {
        return this.sameAsResident ? true : false;
      },
    },
    street2: {
      type: String,
      required: function () {
        return this.sameAsResident ? true : false;
      },
    },
  },

  document: [documentSchema],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
