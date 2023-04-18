const mongoose = require("mongoose");
const { Schema } = require("../app");

const Questions = new Schema({
  title: String,
  description: String,
  options: Array,
  type: String,
  answer: String,
  marks: Number,
});

module.exports = mongoose.model("Test", {
  examId: { type: String, requied: true },
  section: { type: Number, required: true },
  category: { type: String, required: true },
  source: { type: String, required: true },
  instruction: { type: String, required: true },
  questions: [{ type: Questions, required: true }],
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});
