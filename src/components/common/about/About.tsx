import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fbf7f7",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "64px 60px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: "bold",
        }}
        variant="h4"
      >
        About Me
      </Typography>
      <Typography sx={{ fontFamily: "'Libre Baskerville', serif" }}>
        I am a Frontend Web Developer rookie. Currently learning React, MUI, and
        Typescript by building a simple webpage.
      </Typography>
    </Box>
  );
};

export default About;
