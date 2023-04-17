import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ExamCard from "../../Components/Student/PractiseTests/ExamCard";

const PracticeTestDashBoard = () => {
  //   const [data, setData] = useState();

  const data = [
    {
      exam_date: "11 March 2023",
      exam_id: 1,
      exam_title: "Exam1",
      test_id: 1,
    },
    {
      exam_date: "12 March 2023",
      exam_id: 1,
      exam_title: "Exam2",
      test_id: 1,
    },
    {
      exam_date: "13 March 2023",
      exam_id: 1,
      exam_title: "Exam3",
      test_id: 1,
    },
    {
      exam_date: "14 March 2023",
      exam_id: 1,
      exam_title: "Exam4",
      test_id: 1,
    },
    {
      exam_date: "12 March 2023",
      exam_id: 1,
      exam_title: "Exam5",
      test_id: 1,
    },
    {
      exam_date: "12 March 2023",
      exam_id: 1,
      exam_title: "Exam6",
      test_id: 1,
    },
    {
      exam_date: "12 March 2023",
      exam_id: 1,
      exam_title: "Exam7",
      test_id: 1,
    },
    {
      exam_date: "12 March 2023",
      exam_id: 1,
      exam_title: "Exam8",
      test_id: 1,
    },
  ];

  useEffect(() => {}, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Select any of the test to get started!
      </Typography>
      <Grid container spacing={4}>
        {data.map((exam, index) => (
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
