// src/Components/SideBar.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/AuthReducer/action';

const SideBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar bg-gray-800 text-white p-4 w-64 min-h-screen">
      <h3 className="text-xl font-bold mb-4">Filter by Rating</h3>
      <div className="mb-4">
        {[2, 3, 4, 5].map(rating => (
          <div key={rating} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`rating-${rating}`}
              value={rating}
              className="mr-2"
            />
            <label htmlFor={`rating-${rating}`} className="text-sm">{rating}</label>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4">Sort by Year</h3>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="sort-asc"
            name="sort"
            value="asc"
            className="mr-2"
          />
          <label htmlFor="sort-asc" className="text-sm">Ascending</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="sort-desc"
            name="sort"
            value="desc"
            className="mr-2"
          />
          <label htmlFor="sort-desc" className="text-sm">Descending</label>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white p-2 mt-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
