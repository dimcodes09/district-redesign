import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiFilm, FiMapPin, FiChevronDown } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";

const FilterBar = ({ onFilterChange }) => {
  const [dropdown, setDropdown] = useState(null);
  const [filters, setFilters] = useState({ genre: "", price: "", location: "" });
  const dropdownRef = useRef();

  // PARALLAX SCROLL EFFECT
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -40]); // slower movement

  const toggleDropdown = (key) => setDropdown(dropdown === key ? null : key);

  const applyFilter = (field, value) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    onFilterChange(updated);
    setDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const chip = (icon, label, field, options) => (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => toggleDropdown(field)}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full border shadow-md transition-all
          backdrop-blur-xl 
          ${
            dropdown === field || filters[field]
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg"
              : "bg-white/40 border-white/40 text-gray-700"
          }
        `}
      >
        {icon}
        <span className="font-medium">
          {filters[field] ? options.find(o => o.value === filters[field])?.label : label}
        </span>
        <FiChevronDown
          className={`transition-transform ${dropdown === field ? "rotate-180" : ""} text-lg`}
        />
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {dropdown === field && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 w-48 bg-white shadow-xl rounded-xl border z-20 mt-2 overflow-hidden"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => applyFilter(field, opt.value)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.div
      style={{ y: parallaxY }}  // PARALLAX MAGIC HERE
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center w-full mt-12 mb-10"
    >
      <div
        className="
          flex items-center gap-6 
          px-10 py-5 rounded-2xl 
          backdrop-blur-2xl bg-white/20 
          border-[2px] border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.15)]
          bg-gradient-to-br from-white/40 to-white/10
        "
      >
        {chip(<FiFilm className="text-lg" />, "Genre (All)", "genre", [
          { value: "", label: "Genre (All)" },
          { value: "action", label: "Action" },
          { value: "drama", label: "Drama" },
          { value: "thriller", label: "Thriller" },
          { value: "comedy", label: "Comedy" },
        ])}

        {chip(<MdOutlineAttachMoney className="text-xl" />, "Price (All)", "price", [
          { value: "", label: "Price (All)" },
          { value: "0-300", label: "₹0 - ₹300" },
          { value: "300-800", label: "₹300 - ₹800" },
          { value: "800-2000", label: "₹800 - ₹2000" },
        ])}

        {chip(<FiMapPin className="text-lg" />, "Location (All)", "location", [
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
