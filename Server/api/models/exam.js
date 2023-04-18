const mongoose = require("mongoose");

module.exports = mongoose.model("Exam", {
  type: { type: String, requied: true },
  title: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});
