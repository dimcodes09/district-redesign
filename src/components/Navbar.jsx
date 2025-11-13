import React, { useEffect, useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/search/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { path: "/movies", label: "Movies" },
    { path: "/events", label: "Events" },
    { path: "/activities", label: "Activities" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        {/* 🔥 Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-[24px] sm:text-[26px] font-extrabold 
          bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88]
          text-transparent bg-clip-text cursor-pointer"
        >
          District
        </h1>

        {/* 🌐 Navigation + Search */}
        <div className="flex items-center justify-center space-x-6 sm:space-x-10 flex-1 ml-5 hidden md:flex">

          {/* Nav Links */}
          <ul className="flex items-center space-x-8 text-[15px] font-medium">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative transition-all ${
                      isActive
                        ? "text-[#8A3FFC] font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#8A3FFC] after:rounded-full"
                        : "text-gray-700 hover:text-[#8A3FFC]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <div className="flex items-center bg-white border border-gray-200 rounded-full 
          px-4 py-2 w-[240px] lg:w-[300px] shadow-sm focus-within:ring-2 focus-within:ring-[#8A3FFC]/40">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-[14px]"
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <FiSearch className="text-[#8A3FFC]" size={18} />
          </div>

        </div>

        {/* 👤 Auth Buttons */}
        <div className="flex items-center space-x-5">

          <Link
            to="/login"
            className="flex items-center gap-2 text-gray-700 hover:text-[#8A3FFC] text-[15px] transition"
          >
            <FiUser size={18} /> Login
          </Link>

          <Link
            to="/signup"
            className="bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-white 
            px-5 py-2 rounded-full font-medium text-[15px] shadow-md 
            hover:scale-105 transition"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
