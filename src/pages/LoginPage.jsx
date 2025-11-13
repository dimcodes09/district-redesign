import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../utils/toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = () => {
    if (!form.email || !form.password) {
      return showToast("⚠ Please fill all fields");
    }
    showToast("🔐 Login Successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf4ff] via-[#fce7f3] to-[#fff8f1] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] bg-clip-text text-transparent mb-6">
          Welcome Back 👋
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#8A3FFC]"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#8A3FFC]"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8A3FFC] to-[#FF6A88] text-white font-semibold hover:opacity-90"
          >
            Login
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#8A3FFC] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
