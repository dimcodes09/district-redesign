import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/search/searchSlice";
import FeaturedCarousel from "./FeaturedCarousel";

const Hero = ({ title, subtitle }) => {
  const dispatch = useDispatch();

  return (
    <section className="relative flex flex-col justify-center items-center text-center 
    pt-36 sm:pt-40 md:pt-48 pb-16 md:pb-24 
    bg-gradient-to-br from-[#fdf4ff] via-[#fce7f3] to-[#fff8f1] 
    text-gray-900 overflow-hidden">

      {/* ✨ Soft glowing background */}
      <div className="absolute inset-0 
      bg-[radial-gradient(circle_at_25%_20%,_rgba(138,63,252,0.12),_transparent_60%),_radial-gradient(circle_at_80%_80%,_rgba(255,106,136,0.18),_transparent_60%)]">
      </div>

      {/* 🌟 Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
        mb-5 md:mb-6 leading-tight 
        bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] 
        bg-clip-text text-transparent z-10 px-4"
      >
        {title}
      </motion.h1>

      {/* 📄 Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-base sm:text-lg md:text-xl text-gray-700 font-medium 
        max-w-2xl mb-10 md:mb-12 px-5 z-10"
      >
        {subtitle}
      </motion.p>

      {/* 🔍 Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex w-[92%] sm:w-[75%] md:w-[55%] lg:w-[45%] 
        bg-white/70 backdrop-blur-md rounded-full overflow-hidden 
        shadow-lg border border-gray-200 z-10"
      >
        <input
          type="text"
          placeholder="Search for movies, events or activities..."
          className="flex-1 px-5 py-3 sm:py-4 bg-transparent 
          outline-none text-gray-700 text-sm sm:text-base"
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />

        <button className="px-6 sm:px-8 py-3 sm:py-4 text-white 
        bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] 
        font-semibold flex items-center gap-2 
        hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
          Search <FiArrowRight className="text-lg" />
        </button>
      </motion.div>

      {/* 🎥 Featured Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="w-full md:w-[85%] mt-20 md:mt-24 z-10"
      >
        <FeaturedCarousel />
      </motion.div>
    </section>
  );
};

export default Hero;
