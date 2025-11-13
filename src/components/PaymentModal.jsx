import React, { useState } from "react";
import { motion } from "framer-motion";
import { showToast } from "../utils/toast";

const PaymentModal = ({ isOpen, onClose, item }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handlePayment = () => {
    if (!name || !email) {
      showToast("⚠️ Please fill all fields");
      return;
    }

    showToast("💳 Processing payment...");
    setTimeout(() => {
      showToast("🎉 Payment Successful!");
      onClose();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="bg-white w-96 p-6 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          🔐 Secure Payment
        </h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="border rounded-lg px-3 py-2 bg-gray-100">
            <p className="text-gray-700 font-semibold">
              Amount: {item?.price || "₹500"}
            </p>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Pay Now
          </button>

          <button
            onClick={onClose}
            className="w-full text-gray-500 mt-1 text-sm hover:text-gray-700"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentModal;
