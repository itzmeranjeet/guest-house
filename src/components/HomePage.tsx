import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

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

const zoomIn: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const buttonHover: Variants = {
  hover: {
    scale: 1.1, // Scale up the button
    boxShadow: "0 4px 10px rgba(212, 170, 125, 0.5)", // Add a soft shadow for the highlight
    transition: {
      duration: 0.3, // Duration of the hover effect
      ease: "easeInOut", // Smooth easing
    },
  },
};

const fadeInLeftText: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen bg-gray-900">
      <motion.img
        src="/images/kingsukh guesh house assets/ayodhya.webp"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Kingsukh Guest House"
        initial="hidden"
        animate="show"
        variants={zoomIn}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      <nav className="mt-6 mx-auto max-w-5xl fixed left-0 right-0 bg-gray-900 bg-opacity-70 rounded-md z-10">
        <div className="flex flex-wrap items-center justify-between mx-auto p-1">
          <a href="#" className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#d4aa7d] uppercase border-b-4 border-t-4 border-[#a67c52] px-2">
              Kingsukh
            </span>
            <span className="text-sm font-medium text-[#a67c52] italic mt-1">
              Guest House
            </span>
          </a>

          <motion.div className="flex items-center space-x-4">
            <motion.button
              whileHover="hover"
              variants={buttonHover}
              className="bg-[#d4aa7d] rounded-lg px-6 py-2 text-center text-sm text-white font-medium transition-all duration-200 hover:bg-[#a67c52] hover:shadow-md"
            >
              Book Now
            </motion.button>
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 md:hidden"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </motion.div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex w-full md:w-auto`}
            id="navbar-cta"
          >
            <ul className="flex flex-col md:flex-row p-4 mt-4 md:space-x-8 md:mt-0 text-[#d4aa7d]">
              {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <a
                      href="#"
                      className="block py-2 px-3 md:p-0 text-white hover:text-[#a67c52] transition-all duration-300"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
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

export default HomePage;
