import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Movie Library</h1>
      <p className="mb-6 text-center text-lg">
        Welcome to our Movie Library App Please sign up or sign in to continue.
      </p>
      <div className="space-x-4">
        <Link to="/signup">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Signup
          </button>
        </Link>
        <Link to="/signin">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Signin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
