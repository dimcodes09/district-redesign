// src/components/AdminLoginModal.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../features/auth/authSlice";

const AdminLoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin({ email, password }));
    setEmail("");
    setPassword("");
    onClose(); // close modal after login attempt
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-96 p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;
