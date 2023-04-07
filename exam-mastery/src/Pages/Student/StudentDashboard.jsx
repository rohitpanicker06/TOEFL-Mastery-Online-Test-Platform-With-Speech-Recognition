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

const StudentDashboard = () => {
  const [userData, setUserData] = useState({});
  const [summary, setSummary] = useState({
    reading: 0,
    listening: 0,
    writing: 0,
    speaking: 0,
  });
  const [timeline, setTimeline] = useState([]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
        <Typography variant="h4" sx={{}}>
          Hi, Welcomeeeeeee Rutuja
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
                data: [8, 6.5, 4, 8, 9],
              },
              {
                name: "Writing",
                data: [6, 4.5, 8, 6, 9],
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
              image: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fuser-profile-icon%2F&psig=AOvVaw0KejkpKrPBU69l9kI0VFnh&ust=1680933016016000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKDLj9GJl_4CFQAAAAAdAAAAABAQ`,

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
