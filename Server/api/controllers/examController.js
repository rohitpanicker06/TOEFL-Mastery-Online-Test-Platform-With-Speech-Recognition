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

exports.findTestsById = async (req, res) => {
  const id = req.params.id;

  console.log("In here by Id" + id);

  await Test.find({ examId: id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Test with Examid " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Examid=" + id });
    });
};
