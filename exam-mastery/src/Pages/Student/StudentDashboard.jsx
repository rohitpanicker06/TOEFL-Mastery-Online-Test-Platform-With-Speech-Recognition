import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Summary from "../../Components/Student/Summary";
import { useEffect, useState } from "react";

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
      </Grid>
    </Container>
  );
};

export default StudentDashboard;
