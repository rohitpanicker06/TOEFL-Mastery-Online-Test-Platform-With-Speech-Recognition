const examService = require("../services/examService");
const Exam = require("../models/exam");
const Test = require("../models/test");

// Retrieve all exams from the database.
exports.findExam = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

// Retrieve all exams from the database.
exports.findTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
