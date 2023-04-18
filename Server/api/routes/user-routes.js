const express = require("express");
const userController = require("../controllers/user-controller");
const emailController = require("../controllers/emailController");
const memberController = require("../controllers/memberController");
const examController = require("../controllers/examController");
const adminController = require("../controllers/adminController");

const router = express.Router();

//get request
router.get("/", async (req, res) => {
  try {
    res.send("Welcome to Exam Mastery Backend");
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

// to register new user
router.route("/signup").post(userController.signIn);

// to login user
router.route("/login").post(userController.login);

// email verification
router.route("/email").post(emailController.send);

router.route("/getTeamMembers").get(memberController.send);

// router.route("/getAllexams").get(examController.send);

router.route("/getExams").get(adminController.send);

router.route("/createExam").post(adminController.createExam);

router.route("/updateExam").put(adminController.updateExam);

router.route("/deleteExam").delete(adminController.deleteExam);

//get All Exams
router.get("/exams", examController.findExam);

//get All Tests
router.get("/tests", examController.findTests);

module.exports = router;
