import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("auth_user")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser,
    isLoggedIn: !!savedUser,
    role: savedUser?.role || null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.role = action.payload.role;
      localStorage.setItem("auth_user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.role = null;
      localStorage.removeItem("auth_user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
