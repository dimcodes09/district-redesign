import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import FeaturedCarousel from "./components/FeaturedCarousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdminLoginModal from "./components/AdminLoginModal";
import AppRouter from "./router/AppRouter";

import { addMovie, removeMovie } from "./features/movies/moviesSlice";
import { logoutAdmin } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state.auth);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  // ✅ Add movie (with Toast)
  const handleAdd = () => {
    if (title && image && category) {
      dispatch(addMovie({ title, image, category }));
      toast.success("🎬 Movie added successfully!");
      setTitle("");
      setImage("");
      setCategory("");
    } else {
      toast.warn("⚠️ Please fill all fields before adding!");
    }
  };

  // ✅ Remove movie (with Toast)
  const handleRemove = () => {
    if (title) {
      dispatch(removeMovie(title));
      toast.info("🗑️ Movie removed successfully!");
      setTitle("");
    } else {
      toast.error("❌ Enter movie title to remove!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gray-50"
    >
      {/* ✅ Navbar stays global */}
      <Navbar />

      {/* ✅ Floating Admin Login / Logout */}
      {!isAdmin ? (
        <button
          onClick={() => setShowLogin(true)}
          className="fixed bottom-6 left-6 text-[12px] text-gray-500 hover:text-purple-600 underline transition-all duration-300 z-40"
        >
          Admin
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(logoutAdmin());
            toast.info("👋 Logged out successfully!");
          }}
          className="fixed bottom-6 left-6 bg-gradient-to-r from-[#E23744] to-[#F6B544] text-white text-xs px-3 py-1.5 rounded-full shadow-md hover:scale-105 transition-all duration-300 z-40"
        >
          Logout
        </button>
      )}

      {/* ✅ Admin Login Modal */}
      <AdminLoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

      {/* ✅ Admin Movie Panel */}
      {isAdmin && (
        <div className="bg-white rounded-xl shadow-md p-6 w-3/4 mx-auto mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
            <span>🎬</span> Manage Movie List (Redux Toolkit)
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
            >
              Add Movie
            </button>
            <button
              onClick={handleRemove}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Remove by Title
            </button>
          </div>
        </div>
      )}

      {/* ✅ Routes handled separately */}
      <AppRouter />

      {/* ✅ Footer & ScrollToTop stay global */}
      <Footer />
      <ScrollToTop />

      {/* ✅ Toastify Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </motion.div>
  );
};

export default App;
