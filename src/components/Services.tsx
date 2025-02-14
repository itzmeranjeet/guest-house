import React, { useRef } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaBuildingShield, FaClock, FaUtensils } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "High Class Security",
    icon: <FaBuildingShield />,
    bgColor: "bg-white",
    textColor: "text-[#8B3D3D]",
  },
  {
    title: "24 Hours Room Service",
    icon: <FaClock />,
    bgColor: "bg-white",
    textColor: "text-[#8B3D3D]",
  },
  {
    title: "Restaurant and Bar",
    icon: <FaUtensils />,
    bgColor: "bg-white",
    textColor: "text-[#8B3D3D]",
  },
  {
    title: "Tourist Guide Support",
    icon: <FaMapMarkedAlt />,
    bgColor: "bg-white",
    textColor: "text-[#8B3D3D]",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="services"
      ref={ref}
      className="py-20 px-4 bg-gray-300 lg:h-auto xl:h-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#B86B4B] relative inline-block">
            OUR SERVICES{" "}
          </h2>
          <p className="text-[#333333] mt-4 max-w-lg mx-auto">
            Strive Only For The Best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }} 
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                } 
                transition={{
                  delay: index * 0.3, 
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className={`p-6 border rounded-lg flex items-center ${service.bgColor} ${service.textColor} text-lg font-semibold shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#8B3D3D] hover:text-white`}
              >
                <span className="text-3xl mr-3">{service.icon}</span>
                {service.title}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }} 
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} 
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-full shadow-2xl "
          >
            <img
              src="/images/assets/palash.webp"
              alt="Dining"
              className="w-full h-[250px] sm:h-[350px] object-cover rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
