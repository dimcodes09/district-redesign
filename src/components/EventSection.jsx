// src/components/EventSection.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toast";
import FilterBar from "./FilterBar";

const EventSection = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({});
  const events = useSelector((state) => state.events?.list || []);
  const searchTerm = useSelector((state) => state.search?.term?.toLowerCase() || "");

  if (!events || !events.length) return null;

  const applyFilters = (event) => {
    const title = (event.title || "").toLowerCase();
    if (searchTerm && !title.includes(searchTerm)) return false;
    if (filters.genre && !(event.category || "").toLowerCase().includes(filters.genre)) return false;
    if (filters.location && !(event.location || "").toLowerCase().includes(filters.location)) return false;
    if (filters.price && event.price) {
      const [min, max] = filters.price.split("-").map(Number);
      const priceValue = Number(String(event.price).replace(/[₹,\s]/g, ""));
      if (isNaN(priceValue) || priceValue < min || priceValue > max) return false;
    }
    return true;
  };

  return (
    <section id="events" className="px-6 sm:px-10 py-16 bg-gradient-to-b from-white to-purple-50 transition-all duration-300">
      <FilterBar onFilterChange={setFilters} />
      <div className="text-center mb-10 mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">🎤 Events Happening Near You</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-2 text-sm">Find concerts, stand-ups, and festivals near you</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {events.filter(applyFilters).map((event, index) => (
          <motion.div
            key={event.id ?? index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-300 overflow-hidden w-[90%] sm:w-[270px]"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.category}</p>
              <button
                onClick={() => {
                  showToast("🎟️ Redirecting to details page...");
                  navigate(`/details/events/${event.id ?? encodeURIComponent(event.title)}`);
                }}
                className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
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

export default EventSection;
