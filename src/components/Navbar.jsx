// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/search/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const controls = useAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ height: isScrolled ? 64 : 88, transition: { duration: 0.35 } });
  }, [isScrolled, controls]);

  const navLinks = [
    { path: "/movies", label: "Movies" },
    { path: "/events", label: "Events" },
    { path: "/activities", label: "Activities" },
  ];

  return (
    <motion.nav
      animate={controls}
      initial={{ height: 88 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "backdrop-blur-lg bg-white/60 shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-full">
        <h1
          onClick={() => navigate("/")}
          className={`text-[26px] font-extrabold bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-transparent bg-clip-text cursor-pointer tracking-tight transition-all ${isScrolled ? "text-[22px]" : "text-[26px]"}`}
        >
          District
        </h1>

        <div className="flex items-center flex-1 justify-center space-x-8">
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative pb-1 transition-all ${isActive ? "text-[#8A3FFC] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#8A3FFC] after:rounded-full" : "text-gray-700 hover:text-[#8A3FFC]"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 w-[360px] shadow-sm transition-all duration-300">
            <input
              type="text"
              placeholder="Search for movies, events..."
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-[15px]"
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <FiSearch className="text-[#8A3FFC] text-lg ml-2" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-[#8A3FFC]">
            <FiUser className="text-[18px]" /> Login
          </Link>
          <Link to="/signup" className="bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-white px-4 py-2 rounded-full font-medium shadow-md hover:scale-105 transition-all">
            Sign Up
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
