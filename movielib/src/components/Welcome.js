import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import MovieLibrary from './MovieLibrary';

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {isAuthenticated ? (
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Movie Library</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
          <MovieLibrary/>
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 text-center">
          <p className="text-xl text-gray-700">You are not authorized. Please sign in.</p>
        </div>
      )}
    </div>
  );
};

export default Welcome;
