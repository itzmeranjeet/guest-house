import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  "/images/assets/flower.jpg",
  "/images/assets/ayodhya.webp",
  "/images/assets/baranti.webp",
  "/images/assets/room1.jpg",
  "/images/assets/header.jpg",
  "/images/assets/1.jpg",
  "/images/assets/palash.webp",
  "/images/assets/mithonDam.webp",
  "/images/assets/service.jpg",
  "/images/assets/flower.jpg",
  "/images/assets/large.jpg",
  "/images/assets/flower.jpg",
  "/images/assets/recep.jpg",
  "/images/assets/out.jpg",
  "/images/assets/small.jpg",
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="gallery" ref={ref} className="bg-gray-300 p-10">
      <div className="container mx-auto p-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            Gallery
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => {
            const animationDirection = index % 2 === 0 ? -50 : 50;
            return (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg break-inside-avoid"
                initial={{ opacity: 0, x: animationDirection }} // Starts hidden & moves up
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: animationDirection }
                } // Only animates when in view
                transition={{ duration: 0.9, delay: index * 0.1 }} // Staggered animation
                whileHover={{ scale: 1.05 }} // Zoom-in on hover
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
