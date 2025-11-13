import React from "react";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const handleFeatureClick = () => {
    toast.info("🚧 This feature is under construction!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#fff5f6] to-[#fef7f1] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        👑 Admin Dashboard
      </h1>

      <p className="text-gray-600 text-lg max-w-xl mb-6">
        Welcome, Admin! Here you can manage movies, events, and activities.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={handleFeatureClick}
          className="bg-gradient-to-r from-[#E23744] to-[#F6B544] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          Manage Movies
        </button>

        <button
          onClick={handleFeatureClick}
          className="bg-gradient-to-r from-[#b721ff] to-[#21d4fd] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          Manage Events
        </button>

        <button
          onClick={handleFeatureClick}
          className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          Manage Activities
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
