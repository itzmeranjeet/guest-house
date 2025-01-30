import React from "react";
import { motion, Variants } from "framer-motion";

const HeroSection = () => {
  const zoomIn = {
    hidden: { scale: 1.1, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const fadeInLeftText = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  };
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden" id="home">
      <motion.img
        src="/images/assets/ayodhya.webp"
        className="absolute top-0 left-0 w-full h-full object-cover" // Ensure object-cover prevents overflow
        alt="Kingsukh Guest House"
        initial="hidden"
        animate="show"
        variants={zoomIn}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      <motion.div
        initial="hidden"
        animate="show"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-6"
      >
        <motion.p
          variants={fadeInLeftText}
          className="text-xl md:text-2xl font-semibold"
        >
          Simple - Unique - Friendly
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-bold"
        >
          Make Yourself At Home In Our{" "}
          <motion.span
            initial={{ textShadow: "0px 0px 5px rgba(212, 170, 125, 0.5)" }}
            animate={{
              textShadow: [
                "0px 0px 5px rgba(212, 170, 125, 0.5)",
                "0px 0px 15px rgba(212, 170, 125, 1)",
                "0px 0px 5px rgba(212, 170, 125, 0.5)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#d4aa7d]"
          >
            Guest House
          </motion.span>
          .
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default HeroSection;
