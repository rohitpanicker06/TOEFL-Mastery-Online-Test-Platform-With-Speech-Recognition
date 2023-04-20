import React from "react";
import { Card, Typography, Container, Grid } from "@mui/material";

const SomeComponent = () => {
  return (
    <Container maxWidth="xl">
      <Card
        sx={{ maxWidth: 400, width: "100%", margin: "auto", padding: "1rem" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <hr style={{ flexGrow: 1, margin: "0 1rem" }} />
          <h1 style={{ fontSize: "1.5rem", textAlign: "center", margin: "0" }}>
            {" "}
            Words of the Day
          </h1>
          <hr style={{ flexGrow: 1, margin: "0 1rem" }} />
        </div>
        <br />
        <Typography variant="h4" sx={{}}>
          Fortitude :
        </Typography>
        <Typography variant="h5" sx={{}}>
          strength of mind
        </Typography>
        <br />
        <Typography variant="h4" sx={{}}>
          Dolorous :
        </Typography>
        <Typography variant="h5" sx={{}}>
          showing or expressing misery or grief
        </Typography>
        <br />
        <Typography variant="h4" sx={{}}>
          Pacify :
        </Typography>
        <Typography variant="h5" sx={{}}>
          to soothe, appease or subdue
        </Typography>
      </Card>
    </Container>
  );
};

export default SomeComponent;
