import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';
import PrivateRoute from './PrivateRoute'; // Implement this component

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/movie/:id" element={<PrivateRoute><MovieDetail /></PrivateRoute>} />
    </Routes>
  );
};

export default MainRoutes;
