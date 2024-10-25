import React from "react";
import Header from "./Componets/Header/Header";
import HeroSection from "./Componets/HeroSection/HeroSection";
import OurServices from "./Componets/OurServices/OurServices";
import OurClients from "./Componets/OurClients/OurClients";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <OurServices />
      <OurClients />
    </>
  );
};

export default Homepage;
