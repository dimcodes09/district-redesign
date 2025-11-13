import React, { useState } from "react";
import { motion } from "framer-motion";

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    genre: "",
    price: "",
    location: "",
  });

  const handleChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md p-4 mb-10 mx-6 md:mx-12 flex flex-wrap gap-4 items-center justify-between border border-gray-100"
    >
      {/* GENRE */}
      <select
        className="px-4 py-2 border rounded-xl outline-none bg-white"
        onChange={(e) => handleChange("genre", e.target.value)}
      >
        <option value="">Genre (All)</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="thriller">Thriller</option>
        <option value="comedy">Comedy</option>
      </select>

      {/* PRICE */}
      <select
        className="px-4 py-2 border rounded-xl outline-none bg-white"
        onChange={(e) => handleChange("price", e.target.value)}
      >
        <option value="">Price (All)</option>
        <option value="0-300">₹0 - ₹300</option>
        <option value="300-800">₹300 - ₹800</option>
        <option value="800-2000">₹800 - ₹2000</option>
      </select>

      {/* LOCATION */}
      <select
        className="px-4 py-2 border rounded-xl outline-none bg-white"
        onChange={(e) => handleChange("location", e.target.value)}
      >
        <option value="">Location (All)</option>
        <option value="delhi">Delhi</option>
        <option value="gurugram">Gurugram</option>
        <option value="mumbai">Mumbai</option>
      </select>
    </motion.div>
  );
};

export default FilterBar;
