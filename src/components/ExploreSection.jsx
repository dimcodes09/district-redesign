import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toast"; // ✅ Toast utility

const ExploreSection = ({ title, items, type = "movies" }) => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // ✅ Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  // ✅ Navigate to detail page with Toast
  const handleBookNow = (item) => {
    showToast("🎟️ Redirecting to details page...");
    navigate(`/details/${type}/${item.id ?? encodeURIComponent(item.title)}`);
    setSelected(null);
  };

  return (
    <section className="px-8 md:px-20 py-16 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* ✨ Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Curated picks, trending now near you ✨
        </p>
      </motion.div>

      {/* 🎞️ Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden w-[270px]"
          >
            {/* ✅ Image */}
            <div className="relative w-full h-[320px] overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top rounded-t-2xl"
                loading="lazy"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-sm font-semibold text-gray-700 mt-2">
                {item.price}
              </p>
              <button
                onClick={() => setSelected(item)}
                className="mt-4 bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
              >
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🎬 Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: -40, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-2xl w-full md:w-[550px] overflow-hidden"
            >
              <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selected.title}
                </h3>
                <p className="text-gray-600 mb-2">{selected.location}</p>
                <p className="text-gray-700 font-semibold mb-4">
                  {selected.price}
                </p>

                {/* ✅ Toastify + Navigate */}
                <button
                  onClick={() => handleBookNow(selected)}
                  className="bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-all"
                >
                  Book Now
                </button>

                <button
                  className="block mx-auto mt-4 text-gray-500 hover:text-gray-700 text-sm"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExploreSection;
