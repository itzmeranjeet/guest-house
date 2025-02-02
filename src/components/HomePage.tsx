import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import HeroSection from "./HeroSection";
import Rooms from "./Rooms";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace("#", ""), {
        duration: 500,
        smooth: true,
        offset: 0,
      });
    }
  }, [location]);

  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Services />
        <Rooms />
      </div>
    </>
  );
};

export default HomePage;
