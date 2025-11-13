import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useSelector((state) => state.auth);

  if (!isAdmin) {
    toast.error("🚫 Access denied! Admins only.");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
