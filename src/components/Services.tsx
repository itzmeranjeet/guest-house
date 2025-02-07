import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaBuildingShield, FaClock, FaUtensils } from "react-icons/fa6";

const services = [
  {
    title: "High Class Security",
    icon: <FaBuildingShield />,
    bgColor: "bg-white",
    textColor: "text-[#a67c52]",
  },
  {
    title: "24 Hours Room Service",
    icon: <FaClock />,
    bgColor: "bg-white",
    textColor: "text-[#a67c52]",
  },
  {
    title: "Restaurant",
    icon: <FaUtensils />,
    bgColor: "bg-white",
    textColor: "text-[#a67c52]",
  },
  {
    title: "Tourist Guide Support",
    icon: <FaMapMarkedAlt/>,
    bgColor: "bg-white",
    textColor: "text-[#a67c52]",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 px-6 bg-gray-300">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            Our Services
            {/* <span className="absolute left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-500 rounded-full bottom-0 mt-2"></span> */}
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto">
            Strive Only For The Best.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 border rounded-lg flex items-center justify-center ${service.bgColor} ${service.textColor} text-lg font-semibold shadow-md transition-all hover:scale-105 hover:bg-[#a67c52] hover:text-white`}
              >
                <span className="text-3xl mr-3">{service.icon}</span>
                {service.title}
              </div>
            ))}
          </div>

          <div className="w-full">
            <img
              src="/images/assets/palash.webp"
              alt="Dining"
              className="w-full h-[250px] sm:h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
