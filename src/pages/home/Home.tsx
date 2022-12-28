import { Box } from "@mui/material";
import Card from "../../components/common/card/Card";
import Category from "../../components/category/Category";
import Hero from "../../components/common/hero/Hero";
import cardImage from "../../static/image5.jpg";
import React from "react";
import About from "../../components/common/about/About";

const Home: React.FunctionComponent = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Category />
      <Card cardImage={cardImage} title="Title" content="The contents" />
    </Box>
  );
};

export default Home;
