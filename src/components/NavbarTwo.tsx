import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const NavbarTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSetActive = (item: string) => {
    setActiveLink(item.toLowerCase());
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-70 backdrop-blur-md z-20 shadow-lg mt-2 mx-auto max-w-5xl rounded-md">
      <div className="max-w-6xl mx-auto p-3 flex justify-between items-center ">
        <a href="/home" className="flex items-center space-x-2 flex-col ml-4">
          <motion.span
            className="text-xl font-extrabold text-white uppercase tracking-wider hover:text-[#8B3D3D] "
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Kingsukh
          </motion.span>
          <motion.span
            className="text-sm font-medium text-[#a67c52] italic"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 50 }}
          >
            Guest House
          </motion.span>
        </a>
        <div className="hidden md:flex items-center space-x-4 mr-4">
          {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
            (item) => (
              <motion.div key={item}>
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onSetActive={() => {
                    handleSetActive(item);
                    window.history.replaceState(
                      null,
                      "",
                      ` ${item.toLowerCase()}`
                    );
                  }}
                  className={`text-lg font-medium text-white hover:text-[#D06F2F] transition-all duration-200 ease-out cursor-pointer ${
                    activeLink === item.toLowerCase() ? "text-[#D06F1E]" : ""
                  }`}
                >
                  {item}
                </Link>
              </motion.div>
            )
          )}
          <Button>Book Now</Button>
        </div>
        <button
          onClick={handleMenuToggle}
          className="md:hidden p-3 rounded-md text-white"
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
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-900 bg-opacity-70 p-6 space-y-4 transition-all duration-300`}
      >
        {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
          (item) => (
            <motion.div key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`text-xl text-white hover:text-[#D06F2F] py-2 transition-all duration-300 inline-block ${
                  activeLink === item.toLowerCase() ? "text-[#D06F2E]" : ""
                }`}
                onClick={() => {
                  handleSetActive(item);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </Link>
            </motion.div>
          )
        )}
        <Button>Book Now</Button>
      </div>
    </nav>
  );
};

export default NavbarTwo;
