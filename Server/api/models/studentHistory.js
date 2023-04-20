const mongoose = require("mongoose");
const { Schema } = require("../app");

const QuestionOptions = new Schema({
  que_options: String,
  selected: Boolean,
});

const UserResponse = new Schema({
  questionId: String,
  questionTitle: String,
  questionOptions: [{ type: QuestionOptions }],
  correctAnswer: String,
});

const TestHistory = new Schema({
  testType: String,
  testId: String,
  section: Number,
  examId: String,
  score: mongoose.Schema.Types.Mixed,
  userResponse: [{ type: UserResponse }],
});

module.exports = mongoose.model(
  "StudentHistory",
  {
    _id: { type: String, required: true },
    name: { type: String, requied: true },
    email: { type: String, required: true },
    profileURL: { type: String },
    testHistory: [{ type: TestHistory }],
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  "studentHistory"
);
