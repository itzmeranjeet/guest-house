import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion"; // Import motion and useInView hook

interface RoomCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const RoomCard: React.FC<RoomCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg flex-shrink-0 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        {title === "Standard Room" && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 text-xs rounded-full shadow-md">
            ⭐ Popular
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-[#333333]">{title}</h3>
        <p className="text-[#6A7B3D] text-sm mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[#6A7B3D] font-bold text-lg">
            {price}/night
          </span>
          <Button>Book Now</Button>
        </div>
      </div>
    </motion.div>
  );
};

const RoomList: React.FC = () => {
  const rooms: RoomCardProps[] = [
    {
      image: "/images/assets/large.jpg",
      title: "Cozy Haven Room",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: 1000,
    },
    {
      image: "/images/assets/small.jpg",
      title: "Standard Room",
      description:
        "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: 1500,
    },
    {
      image: "/images/assets/room1.jpg",
      title: "Spacious Serenity Suite",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: 1000,
    },
  ];

  const ref = useRef(null);

  return (
    <section id="rooms" ref={ref} className="py-16 px-4 bg-[#f5ebe0]">
      <h1 className="text-4xl font-bold text-[#B86B4B] text-center mb-10">
        OUR ROOMS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center px-4">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default RoomList;
