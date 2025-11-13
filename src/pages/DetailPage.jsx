import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { showToast } from "../utils/toast";
import PaymentModal from "../components/PaymentModal"; // ✅ IMPORTANT

const DetailPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const [showTrailer, setShowTrailer] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false); // ✅ NEW STATE

  const dataMap = {
    movies: useSelector((state) => state.movies.list || []),
    events: useSelector((state) => state.events.list || []),
    activities: useSelector((state) => state.activities.list || []),
  };

  const items = dataMap[type] || [];

  const item =
    items.find(
      (i) =>
        i.id?.toString() === id ||
        encodeURIComponent(i.title) === id ||
        i.title?.toLowerCase() === decodeURIComponent(id)?.toLowerCase()
    ) || {};

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#fdf4ff] via-[#fce7f3] to-[#fff8f1]"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-white/70 px-4 py-2 rounded-full shadow-md text-gray-700 font-medium hover:bg-white transition-all mb-6"
      >
        ← Back
      </button>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border overflow-hidden flex flex-col md:flex-row">
        
        {/* Poster */}
        <div className="md:w-1/2 h-[400px] md:h-[520px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {item.title}
          </h1>

          {/* ⭐ Ratings */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-yellow-500 text-2xl">⭐</span>
            <p className="text-gray-700 font-medium">95% people liked this</p>
          </div>

          {/* Date + Location */}
          <p className="text-gray-700 mb-1">
            <strong>Date:</strong> {item.date || "To be announced"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Location:</strong> {item.location || "Details coming soon"}
          </p>

          {/* Show Timings */}
          <div className="bg-gray-100 p-4 rounded-xl mb-6">
            <h3 className="font-bold mb-2">Available Timings</h3>
            <div className="flex gap-3">
              <span className="bg-white px-4 py-2 rounded-full shadow border">
                10:00 AM
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow border">
                2:00 PM
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow border">
                6:30 PM
              </span>
            </div>
          </div>

          {/* Trailer Button */}
          <button
            onClick={() => setShowTrailer(true)}
            className="bg-black text-white px-6 py-3 rounded-full mb-4 w-full hover:bg-gray-900"
          >
            ▶ Watch Trailer
          </button>

          {/* 💳 Book Now → Opens Payment Modal */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setPaymentOpen(true)} // ✅ OPEN PAYMENT MODAL
            className="bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-white px-6 py-3 rounded-full font-semibold w-full hover:opacity-90"
          >
            Book Now
          </motion.button>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {items.slice(0, 4).map((rec, i) => (
            <div
              key={i}
              onClick={() =>
                navigate(`/details/${type}/${rec.id ?? encodeURIComponent(rec.title)}`)
              }
              className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={rec.image} className="h-40 w-full object-cover" />
              <p className="p-2 text-center font-medium">{rec.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎥 Trailer Modal */}
      <AnimatePresence>
        {showTrailer && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-black rounded-xl overflow-hidden w-[90%] md:w-[700px]"
            >
              <div className="w-full h-[400px] flex items-center justify-center text-white">
                <p className="text-lg">🎥 Trailer Coming Soon</p>
              </div>

              <button
                onClick={() => setShowTrailer(false)}
                className="bg-white text-black py-2 w-full font-medium hover:bg-gray-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💳 PAYMENT MODAL */}
      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        item={item}
      />
    </motion.section>
  );
};

export default DetailPage;
