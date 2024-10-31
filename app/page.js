import React from "react";
import Header from "./Componets/Header/Header";
import HeroSection from "./Componets/HeroSection/HeroSection";
import OurServices from "./Componets/OurServices/OurServices";
import OurClients from "./Componets/OurClients/OurClients";
import GetInTouch from "./Componets/GetInTouch/GetInTouch";
import BlogSlider from "./Componets/BlogSlider/BlogSlider";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <OurServices />
      <OurClients />
      <GetInTouch />
      <BlogSlider />
    </>
  );
};

export default Homepage;
