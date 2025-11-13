import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#fdf4ff] via-[#fce7f3] to-[#fff8f1] text-gray-800 mt-20 rounded-t-3xl shadow-inner border-t border-gray-200 relative overflow-hidden"
    >
      {/* ✨ Subtle gradient glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(138,63,252,0.15),_transparent_60%),_radial-gradient(circle_at_70%_30%,_rgba(255,106,136,0.15),_transparent_60%)] pointer-events-none"></div>

      {/* 🌆 Main Content */}
      <div className="relative max-w-7xl mx-auto px-8 md:px-12 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm z-10">
        {/* 🏙️ Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] bg-clip-text text-transparent mb-3">
            District
          </h2>
          <p className="text-gray-600 leading-relaxed text-[15px] max-w-sm">
            Discover experiences, events, and adventures around you.  
            Built with ❤️ using React + Redux Toolkit.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/movies" className="hover:text-[#8A3FFC] transition">
                🎬 Movies
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-[#8A3FFC] transition">
                🎤 Events
              </a>
            </li>
            <li>
              <a href="/activities" className="hover:text-[#8A3FFC] transition">
                🧗 Activities
              </a>
            </li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-lg text-gray-900">Connect With Us</h3>
          <p className="text-gray-600">📍 Gurugram, Haryana</p>
          <p className="text-gray-600">✉️ info@district.in</p>
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="p-2 rounded-full bg-white/70 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-[#8A3FFC]"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/70 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-[#8A3FFC]"
            >
              <FiTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ⚙️ Divider Line */}
      <div className="border-t border-gray-200 mx-10"></div>

      {/* 📜 Copyright */}
      <div className="text-center py-4 text-xs text-gray-500 relative z-10">
        © 2025{" "}
        <span className="font-semibold text-[#8A3FFC]">District</span> | Designed by{" "}
        <span className="font-semibold text-[#FF6A88]">Divyanshu Kubde</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
