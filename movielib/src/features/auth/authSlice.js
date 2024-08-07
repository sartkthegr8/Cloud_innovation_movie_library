import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    usersDB: [], // Initialize as an empty array to store users
    error: null,
  },
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      // Check if user already exists
      const userExists = state.usersDB.some((u) => u.username === username);
      if (userExists) {
        state.error = 'User already exists';
      } else {
        // Add new user
        state.usersDB.push({ username, password });
        state.isAuthenticated = true;
        state.user = { username };
        state.error = null;
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.usersDB.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.isAuthenticated = true;
        state.user = { username };
        state.error = null;
      } else {
        state.error = 'Invalid username or password';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;
