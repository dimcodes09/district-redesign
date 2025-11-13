import React from "react";
import { motion } from "framer-motion";


const Card = ({ title, image, category }) => {
  return (
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: Math.random() * 0.3, // small stagger so each card feels natural
  }}
  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
>
      <div className="h-52 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
      </div>
    </motion.div>
  );
};

export default Card;
