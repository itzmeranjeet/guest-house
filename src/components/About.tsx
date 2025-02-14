import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      id="about"
      ref={ref}
      className="flex justify-center lg:h-auto py-16 px-4 sm:px-8 bg-[#f5ebe0]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative flex flex-col lg:flex-row w-full max-w-4xl bg-white shadow-2xl rounded-md p-6 border-2 border-gray-100">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full lg:w-1/3 lg:h-[420px]"
        >
          <motion.img
            src="/images/assets/out.jpg"
            alt="About us"
            className="w-full h-full object-cover rounded-md shadow-xl lg:absolute lg:left-[-80px] top-3 hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full lg:w-3/5 flex flex-col justify-center p-6"
        >
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="text-4xl text-[#B86B4B] font-bold"
          >
            ABOUT US
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.6 }}
            className="text-xl font-bold text-[#333333] mb-4"
          >
            The Best Holidays Start Here!
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.7 }}
            className="text-[#6A7B3D] text-sm mb-6 text-justify"
          >
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1.8, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.8 }}
            className=" text-md mb-2 "
          >
            <strong className="text-gray-800">Address:</strong>
            <span className="text-[#6A7B3D]">
              {" "}
              Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.9, ease: "easeOut", delay: 0.9 }}
            className="text-gray-800 text-md  mb-6"
          >
            <strong>Contact us:</strong>{" "}
            <span className="text-[#6A7B3D]">+91 9007062180</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <Button>Read More</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
