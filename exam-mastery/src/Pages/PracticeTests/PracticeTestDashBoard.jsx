import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ExamCard from "../../Components/Student/PractiseTests/ExamCard";

//Displays the Different exams a student can take
const PracticeTestDashBoard = () => {
  const [data, setData] = useState();

  async function getExamGetTest() {
    try {
      //GET request to get all exams
      const response1 = await fetch(
        "http://localhost:8080/exam-mastery/exams",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "*",
          },
        }
      );
      const exams = await response1.json();
      //GET request to get all tests
      const response2 = await fetch(
        "http://localhost:8080/exam-mastery/tests",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "*",
          },
        }
      );
      const tests = await response2.json();
      return [exams, tests];
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getExamGetTest().then((data) => {
      console.log("data", data);
      const exams = data[0].sort((a, b) => new Date(b.date) - new Date(a.date));
      const tests = data[1];
      exams.forEach((exam) => {
        exam["test"] = tests.filter((test) => test.examId === exam._id);
      });
      //tests in exam by category
      exams.forEach((exam) => {
        exam["reading"] = exam.test
          .filter((test) => test.category === "Reading")
          .map((r) => ({ section: r.section }))
          .sort((a, b) => a.section - b.section);
        exam["listening"] = exam.test
          .filter((test) => test.category === "Listening")
          .map((r) => ({ section: r.section }))
          .sort((a, b) => a.section - b.section);
        exam["writing"] = exam.test
          .filter((test) => test.category === "Writing")
          .map((r) => ({ section: r.section }))
          .sort((a, b) => a.section - b.section);
        exam["speaking"] = exam.test
          .filter((test) => test.category === "Speaking")
          .map((r) => ({ section: r.section }))
          .sort((a, b) => a.section - b.section);
        if (
          !exam["reading"].length ||
          !exam["listening"].length ||
          !exam["writing"].length ||
          !exam["speaking"].length
        ) {
          exam["completed"] = false;
        } else {
          exam["completed"] = true;
        }
      });
      setData(exams);
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Select any of the test to get started!
      </Typography>
      <Grid container spacing={4}>
        {data?.map((exam, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-in"
            data-aos-delay={150 * index}
            key={exam._id}
          >
            <ExamCard exam={exam} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PracticeTestDashBoard;
