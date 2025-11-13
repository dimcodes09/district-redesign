import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toast";
import FilterBar from "./FilterBar";

const CategorySection = ({ sectionTitle }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({});

  const movies = useSelector((state) => state.movies.list || []);
  const searchTerm = useSelector((state) => state.search?.term?.toLowerCase() || "");

  if (!movies.length) return null;

  const applyFilters = (movie) => {
    if (searchTerm && !movie.title.toLowerCase().includes(searchTerm)) return false;
    if (filters.genre && movie.genre?.toLowerCase() !== filters.genre) return false;
    if (filters.location && movie.location?.toLowerCase() !== filters.location)
      return false;

    if (filters.price) {
      const [min, max] = filters.price.split("-").map(Number);
      const priceValue = parseInt(movie.price.replace(/[₹^\s]/g, ""));
      if (priceValue < min || priceValue > max) return false;
    }

    return true;
  };

  return (
    <section
      id="movies"
      className="px-6 md:px-10 py-16 bg-gradient-to-b from-gray-50 to-purple-50 transition-all duration-300"
    >
      <FilterBar onFilterChange={setFilters} />

      <div className="text-center mb-10 mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {sectionTitle}
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-2 text-sm">
          Catch the latest blockbusters playing near you 🎥
        </p>
      </div>

      {/* MOVIE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {movies.filter(applyFilters).map((movie, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-white rounded-2xl shadow-md hover:shadow-xl
              transform transition-all duration-300 overflow-hidden
              w-[90%] sm:w-[270px]
            "
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                {movie.title}
              </h3>

              <p className="text-sm text-gray-500">{movie.category}</p>

              <button
                onClick={() => {
                  showToast("🎟️ Redirecting to details page...");
                  navigate(`/details/movies/${movie.id ?? encodeURIComponent(movie.title)}`);
                }}
                className="mt-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
