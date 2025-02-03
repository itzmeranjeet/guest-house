import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center min-h-screen py-16 px-4 sm:px-8 "
    >
      <div className="relative flex flex-col lg:flex-row w-full max-w-4xl bg-[#f4f4f4] shadow-lg rounded-md">
        
        <div className="w-full lg:w-[360px] ">
          <img
            src="/images/assets/out.jpg"
            alt="About us"
            className="w-full h-auto lg:absolute lg:top-[-30px] lg:left-[-30px] lg:w-2/5 lg:h-full object-cover rounded-md shadow-xl"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:ml-[%]">
          <span className="text-sm text-gray-500 font-semibold">ABOUT US</span>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            The Best Holidays Start Here!
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </p>
          <p className="text-gray-600 text-sm mb-6">
            Contact us: +91 9007062180
          </p>
          <button className="px-4 py-2 bg-[#012047] text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
