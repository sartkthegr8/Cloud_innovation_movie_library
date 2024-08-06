// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import MovieDetail from './Pages/MovieDetail';
import SideBar from './Components/SideBar';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 flex">
        {isAuthenticated && <SideBar />}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/login" element={!isAuthenticated ? <LogIn /> : <Navigate to="/" />} />
            <Route path="/signup" element={!isAuthenticated ? <SignUp /> : <Navigate to="/" />} />
            <Route path="/movie/:id" element={isAuthenticated ? <MovieDetail /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
