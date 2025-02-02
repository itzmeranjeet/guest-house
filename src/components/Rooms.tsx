import React from "react";

interface RoomCardProps {
  image: string;
  guests: number;
  size: number;
  title: string;
  description: string;
  price: number;
}

const RoomCard: React.FC<RoomCardProps> = ({
  image,
  guests,
  size,
  title,
  description,
  price,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-80 flex-shrink-0">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 rounded-lg object-cover hover:scale-105 transition-all duration-300 ease-in-out"
        />
        {title === "Standard Room" && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded-md">
            Popular
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold text-lg">
            ${price}/night
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

const RoomList: React.FC = () => {
  const rooms: RoomCardProps[] = [
    {
      image: "/images/assets/large.jpg",
      guests: 4,
      size: 95,
      title: "Cozy Haven Room",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: 175,
    },
    {
      image: "/images/assets/small.jpg",
      guests: 2,
      size: 50,
      title: "Standard Room",
      description:
        "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: 75,
    },
    {
      image: "/images/assets/room1.jpg",
      guests: 4,
      size: 95,
      title: "Spacious Serenity Suite",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: 175,
    },
  ];

  return (
    <section id="rooms" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Our Rooms
      </h2>
      {/* Flex container with responsive behavior */}
      <div className="flex gap-6 justify-center items-center overflow-x-auto flex-nowrap max-w-[500px]:flex-col">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default RoomList;
