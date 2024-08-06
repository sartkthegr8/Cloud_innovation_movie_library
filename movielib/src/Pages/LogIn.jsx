// src/Pages/LogIn.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup, logout } from '../Redux/AuthReducer/action';
import LogoutButton from './LogoutButton';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ username, password }));
      navigate('/');
    } catch (err) {
      // Error is already handled in the reducer
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signup({ username, password }));
      navigate('/');
    } catch (err) {
      // Error is already handled in the reducer
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">{isSignup ? 'Sign Up' : 'Log In'}</h2>
        {error && <p className="text-red-500">{error}</p>}
        {isAuthenticated ? (
          <div className="text-center">
            <p className="mb-4">You are already logged in.</p>
            <LogoutButton />
          </div>
        ) : (
          <form onSubmit={isSignup ? handleSignup : handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? (isSignup ? 'Signing up...' : 'Logging in...') : (isSignup ? 'Sign Up' : 'Log In')}
            </button>
          </form>
        )}
        <div className="mt-4 text-center">
          {isSignup ? (
            <p>
              Already have an account?{' '}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setIsSignup(false)}
              >
                Log In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
