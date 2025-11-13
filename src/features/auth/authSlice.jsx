import { createSlice } from "@reduxjs/toolkit";

// ✅ Load saved admin info (if any)
const savedAdmin = JSON.parse(localStorage.getItem("adminInfo"));

const initialState = savedAdmin || {
  isAdmin: false,
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ Allow any username/password
    loginAdmin: (state, action) => {
      const { email, password } = action.payload;

      if (email.trim() !== "" && password.trim() !== "") {
        state.isAdmin = true;
        state.email = email;

        // Save to localStorage for persistence
        localStorage.setItem(
          "adminInfo",
          JSON.stringify({ isAdmin: true, email })
        );

        alert(`✅ Welcome, ${email}! Logged in as Admin.`);
      } else {
        alert("❌ Please enter both email and password!");
      }
    },

    // ✅ Logout clears data
    logoutAdmin: (state) => {
      state.isAdmin = false;
      state.email = "";
      localStorage.removeItem("adminInfo");
      alert("👋 Logged out successfully!");
    },
  },
});

export const { loginAdmin, logoutAdmin } = authSlice.actions;
export default authSlice.reducer;
