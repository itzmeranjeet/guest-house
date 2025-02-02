import React from "react";

const services = [
  {
    title: "Delicious Food",
    icon: "🍽️",
    bgColor: "bg-white",
    textColor: "text-green-500",
  },
  {
    title: "Fitness",
    icon: "🚴",
    bgColor: "bg-white",
    textColor: "text-green-500",
  },
  {
    title: "Inhouse Restaurant",
    icon: "🍽️",
    bgColor: "bg-white",
    textColor: "text-green-500",
  },
  {
    title: "Beauty Spa",
    icon: "🌱",
    bgColor: "bg-white",
    textColor: "text-green-500",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white py-12 px-6">
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
          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 border rounded-lg flex items-center justify-center ${service.bgColor} ${service.textColor} text-lg font-semibold shadow-md transition-all hover:scale-105 hover:bg-green-500 hover:text-white`}
              >
                <span className="text-3xl mr-3">{service.icon}</span>
                {service.title}
              </div>
            ))}
          </div>

          {/* Image Section */}
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
