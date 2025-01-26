import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import HeroSection from "./HeroSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace("#", ""), {
        duration: 500,
        smooth: true,
        offset: 0, // Adjust for fixed header height
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div>
        <About />
        <Services />
      </div>
    </>
  );
};

export default HomePage;
