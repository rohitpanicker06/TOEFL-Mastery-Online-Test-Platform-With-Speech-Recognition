import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import Summary from "../../Components/Student/Summary";
import { useEffect, useState } from "react";
import SectionWiseComparisonChart from "./SectionWiseComparisonChart";
import SomeComponent from "../../Components/Student/SomeComponent";
import Leaderboard from "../../Components/Student/Leaderboard";
import Iconify from "../../Components/Iconify/Iconify";
import SuggestedStudyMaterial from "../../Components/Student/SuggestedStudyMaterial";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

//Displays the Student Dashboard
const StudentDashboard = () => {
  const [userData, setUserData] = useState({});
  const [summary, setSummary] = useState({
    reading: 0,
    listening: 0,
    writing: 0,
    speaking: 0,
  });
  const [timeline, setTimeline] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [fullname, setFullname] = useState();

  async function getUsername() {
    const name = await fetch(
      `http://localhost:8080/exam-mastery/${email}/name`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "*",
        },
      }
    );
    return await name.json();
  }

  async function getexamhistory() {
    const data = await fetch(
      `http://localhost:8080/exam-mastery/students/${email}/testHistory`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "*",
        },
      }
    );
    return await data.json();
  }

  useEffect(() => {
    getUsername().then((data) => {
      setFullname(data.name);
    });
  }, []);

  useEffect(() => {
    if (email) {
      getexamhistory().then((user) => {
        console.log("user", user[0]);
        setUserData(user.data);
        user[0].testHistory.forEach((test) => {
          if (test.testType === "Reading")
            setSummary((prev) => ({
              ...prev,
              reading: prev.reading + test.score,
            }));
          if (test.testType === "Listening")
            setSummary((prev) => ({
              ...prev,
              listening: prev.listening + test.score,
            }));
          if (test.testType === "Writing")
            setSummary((prev) => ({
              ...prev,
              writing: prev.writing + test.score,
            }));
          if (test.testType === "Speaking")
            setSummary((prev) => ({
              ...prev,
              speaking: prev.speaking + test.score,
            }));
        });
        //average the sores
        setSummary((prev) => {
          const readingTests = user[0].testHistory.filter(
            (test) => test.testType === "Reading"
          ).length
            ? user[0].testHistory.filter((test) => test.testType === "Reading")
                .length
            : 0;
          const listeningTests = user[0].testHistory.filter(
            (test) => test.testType === "Listening"
          ).length
            ? user[0].testHistory.filter(
                (test) => test.testType === "Listening"
              ).length
            : 0;
          const writingTests = user[0].testHistory.filter(
            (test) => test.testType === "Writing"
          ).length
            ? user[0].testHistory.filter((test) => test.testType === "Writing")
                .length
            : 0;
          const speakingTests = user[0].testHistory.filter(
            (test) => test.testType === "Speaking"
          ).length
            ? user[0].testHistory.filter((test) => test.testType === "Speaking")
                .length
            : 0;
          return {
            reading: Math.round(readingTests * 2) / 2,
            listening: Math.round(listeningTests * 2) / 2,
            writing: Math.round(writingTests * 2) / 2,
            speaking: Math.round(speakingTests * 2) / 2,
          };
        });

        //timeline
        const examIds = [
          ...new Set(user[0].testHistory.map((test) => test.examId)),
        ];

        axios
          .all(
            examIds.map((examId) =>
              axios.get(
                `http://localhost:8080/exam-mastery/exams/${examId}/tests`
              )
            )
          )
          .then((data) => {
            console.log(
              data
                .map((exam) => exam.data)
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .slice(0, 5)
            );
            setTimeline(
              data
                .map((exam) => exam.data)
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .slice(0, 5)
            );
          });
      });
    }
  }, [email]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
        <Typography variant="h4" sx={{}}>
          Hi, Welcome {fullname} !
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
          <Summary
            title="Reading"
            total={summary.reading}
            color="success"
            icon={"fluent-mdl2:reading-mode"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Summary
            title="Listening"
            total={summary.listening}
            color="info"
            icon={"grommet-icons:assist-listening"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Summary
            title="Writing"
            total={summary.writing}
            color="warning"
            icon={"icon-park-outline:writing-fluently"}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Summary
            title="Speaking"
            total={summary.speaking}
            color="error"
            icon={"iconoir:mic-speaking"}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={8}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <SectionWiseComparisonChart
            title="Section Wise Comparison"
            subheader="This is a comparison of your performance in each section from all the tests you have taken"
            chartLabels={[
              "01/01/2003",
              "02/01/2003",
              "03/01/2003",
              "04/01/2003",
              "05/01/2003",
            ]}
            chartData={[
              {
                name: "Reading",
                data: [5, 7, 6, 8, 9],
              },
              {
                name: "Listening",
                data: [8, 6, 4, 8, 9],
              },
              {
                name: "Writing",
                data: [6, 4, 8, 6, 9],
              },
              {
                name: "Speaking",
                data: [5, 8, 4, 7, 6],
              },
            ]}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <SomeComponent
            title="Today's Lesson"
            list={timeline.map((item, index) => ({
              id: index,
              title: item.title,
              type: `order${index + 1}`,
              category: item.type,
              time: new Date(item.date).toLocaleDateString(),
            }))}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8} data-aos="fade-in">
          <Leaderboard
            title="Leaderboard"
            subheader="Top 5 students on our platform"
            list={[...Array(5)].map((_, index) => ({
              id: index,
              title: [
                "Raj Shekhawat",
                "John Miller",
                "Melanie Diaz",
                "Cece Patel",
                "Xinzhuo Liu",
              ][index],
              description: [
                "General",
                "Academic",
                "General",
                "Academic",
                "Academic",
              ][index],
              image: [
                `../../assets/userprofile2.png`,
                `../../assets/userprofile1.png`,
                `../../assets/userprofile.png`,
                `../../assets/userprofile3.png`,
                `../../assets/userprofile4.png`,
              ][index],
              proficiency: 8.5 - index,
            }))}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4} data-aos="fade-in">
          <SuggestedStudyMaterial
            title="Study Material"
            subheader="Handpicked recommendations for you"
            list={[
              {
                name: "Reading",
                value: "Youtube",
                icon: (
                  <Iconify icon={"uit:youtube"} color="#1877F2" width={32} />
                ),
                link: "https://www.youtube.com/",
              },
              {
                name: "Listening",
                value: "BYJU",
                icon: (
                  <Iconify
                    icon={"simple-icons:byjus"}
                    color="#DF3E30"
                    width={32}
                  />
                ),
                link: "https://www.byju.com/",
              },
              {
                name: "Speaking",
                value: "Udemy",
                icon: (
                  <Iconify
                    icon={"logos:udemy-icon"}
                    color="#006097"
                    width={32}
                  />
                ),
                link: "https://www.udemy.com/",
              },
              {
                name: "Writing",
                value: "Coursera",
                icon: (
                  <Iconify
                    icon={"academicons:coursera-square"}
                    color="#1C9CEA"
                    width={32}
                  />
                ),
                link: "https://www.coursera.com/",
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;
