import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false, isAdmin: false, user: null },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.isAdmin = action.payload.role === 'admin';
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;