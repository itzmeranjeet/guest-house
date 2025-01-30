import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const buttonHover = {
    hover: { scale: 1.1, transition: { duration: 0.1, ease: "easeInOut" } },
  };

  return (
    <nav className="mt-2 mx-auto max-w-5xl fixed left-0 right-0 bg-gray-900 bg-opacity-70 rounded-md z-10">
      <div className="flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="/home" className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#d4aa7d] uppercase border-b-2 border-t-2 border-[#a67c52] px-2 ml-4">
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
            className="bg-[#012047] rounded-lg px-6 py-2 text-center text-sm text-white font-medium transition-all duration-100 hover:bg-[#012047]"
          >
            Book Now
          </motion.button>
          <button
            onClick={handleMenuToggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 md:hidden"
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
        >
          <ul className="flex flex-col md:flex-row p-4 mt-4 md:space-x-8 md:mt-0 text-[#ffaf5a]">
            {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
              (item) => (
                <motion.li key={item} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={() => {
                      window.history.replaceState(
                        null,
                        "",
                       ` ${item.toLowerCase()}`
                      );
                    }}
                    className="block py-2 px-3 md:p-0 text-white hover:text-[#a67c52] transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
