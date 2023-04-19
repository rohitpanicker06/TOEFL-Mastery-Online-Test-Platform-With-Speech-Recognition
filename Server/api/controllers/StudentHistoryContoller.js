const StudentHistory = require("../models/studentHistory");

exports.createTestHistory = async (req, res) => {
  try {
    const student = await StudentHistory.findOne({ email: req.params.email });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const testHistoryItem = {
      testType: req.body.testType,
      testId: req.body.testId,
      section: req.body.section,
      examId: req.body.examId,
      score: req.body.score,
      userResponse: req.body.userResponse,
    };

    student.testHistory.push(testHistoryItem);
    student.updatedAt = new Date();

    await student.save();
    console.log("Success!");
    res.status(200).json({ message: "Test history created successfully" });
  } catch (error) {
    if (error.name === "VersionError") {
      console.log("Version conflict, retrying...");
      return exports.createTestHistory(req, res); // Retry the operation
    } else {
      console.error(error);
      res.status(500).json({ message: "Error creating test history" });
    }
  }
};

exports.findStudentByEmail = async (req, res) => {
  await StudentHistory.find({ email: req.params.email })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Test with Examid " });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Examid=" });
    });
};
