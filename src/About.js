import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "BlockChain Document About",
  };

  return <HeroSection myData={data} />;
};

export default About;
