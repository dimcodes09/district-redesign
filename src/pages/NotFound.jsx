import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#fdf4ff] via-[#fce7f3] to-[#fff8f1] text-gray-800 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-7xl font-extrabold text-[#8A3FFC] mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-600 mb-8"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
      >
        Back to Home
      </motion.button>
    </section>
  );
};

export default NotFound;
