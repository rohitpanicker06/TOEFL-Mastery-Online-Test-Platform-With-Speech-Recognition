import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ExamCard from "../../Components/Student/PractiseTests/ExamCard";

const PracticeTestDashBoard = () => {
  const [data, setData] = useState();

  const exam = [
    {
      _id: "exam1",
      date: "2023-05-15",
      test: [
        {
          _id: "test1",
          examId: "exam1",
          category: "Reading",
          section: 1,
        },
        {
          _id: "test2",
          examId: "exam1",
          category: "Reading",
          section: 2,
        },
        {
          _id: "test3",
          examId: "exam1",
          category: "Listening",
          section: 1,
        },
        {
          _id: "test4",
          examId: "exam1",
          category: "Listening",
          section: 2,
        },
        {
          _id: "test5",
          examId: "exam1",
          category: "Writing",
          section: 1,
        },
        {
          _id: "test6",
          examId: "exam1",
          category: "Speaking",
          section: 1,
        },
      ],
      reading: [{ section: 1 }, { section: 2 }],
      listening: [{ section: 1 }, { section: 2 }],
      writing: [{ section: 1 }],
      speaking: [{ section: 1 }],
      completed: true,
    },
  ];

  useEffect(() => {}, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Select any of the test to get started!
      </Typography>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          data-aos="fade-in"
          data-aos-delay={150 * 3}
        >
          <ExamCard exam={exam} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PracticeTestDashBoard;
