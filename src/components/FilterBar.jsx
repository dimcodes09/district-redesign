// src/components/FilterBar.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilm, FiMapPin, FiChevronDown } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";

const FilterBar = ({ onFilterChange }) => {
  const [open, setOpen] = useState(null);
  const [filters, setFilters] = useState({ genre: "", price: "", location: "" });
  const [parallaxY, setParallaxY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      // gentle parallax (moves slower than content)
      const y = window.scrollY * 0.06; // tweak multiplier to taste
      setParallaxY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    onFilterChange && onFilterChange(filters);
  }, [filters, onFilterChange]);

  const apply = (field, value) => {
    setFilters((s) => ({ ...s, [field]: value }));
    setOpen(null);
  };

  const chip = (Icon, field, label, options) => {
    const selectedLabel = options.find((o) => o.value === filters[field])?.label || label;
    return (
      <div className="relative" ref={ref}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(open === field ? null : field)}
          className={`flex items-center gap-3 px-5 py-2 rounded-full border transition ${
            filters[field]
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-2xl"
              : "bg-white text-gray-700 border-gray-200"
          }`}
        >
          <Icon className={`${filters[field] ? "text-white" : "text-gray-600"} text-lg`} />
          <span className="font-medium text-sm">{selectedLabel}</span>
          <FiChevronDown className={`ml-1 transition-transform ${open === field ? "rotate-180" : ""}`} />
        </motion.button>

        <AnimatePresence>
          {open === field && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 6, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.14 }}
              className="absolute left-0 top-full mt-3 w-44 bg-white rounded-lg shadow-2xl border z-40 overflow-hidden"
            >
              {options.map((opt) => (
                <button
                  key={opt.value + opt.label}
                  onClick={() => apply(field, opt.value)}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div
      style={{ transform: `translateY(${parallaxY * -0.5}px)` }}
      className="flex justify-center w-full mt-12 mb-10"
    >
      <div
        className="flex items-center gap-6 px-6 py-4
          bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl"
      >
        {chip(FiFilm, "genre", "Genre (All)", [
          { value: "", label: "Genre (All)" },
          { value: "action", label: "Action" },
          { value: "drama", label: "Drama" },
          { value: "thriller", label: "Thriller" },
          { value: "comedy", label: "Comedy" },
        ])}

        {chip(MdOutlineAttachMoney, "price", "Price (All)", [
          { value: "", label: "Price (All)" },
          { value: "0-300", label: "₹0 - ₹300" },
          { value: "300-800", label: "₹300 - ₹800" },
          { value: "800-2000", label: "₹800 - ₹2000" },
        ])}

        {chip(FiMapPin, "location", "Location (All)", [
          { value: "", label: "Location (All)" },
          { value: "delhi", label: "Delhi" },
          { value: "gurugram", label: "Gurugram" },
          { value: "mumbai", label: "Mumbai" },
        ])}
      </div>
    </motion.div>
  );
};

export default FilterBar;
