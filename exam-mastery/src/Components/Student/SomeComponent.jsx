import React from "react";
import { Card } from "@mui/material";

const SomeComponent = () => {
  return (
    <Card sx={{ maxWidth: 400, width: '100%', margin: 'auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', textAlign: 'center', margin: '0' }}> Today's Lesson</h1>
    </Card>
  );
};

export default SomeComponent;
