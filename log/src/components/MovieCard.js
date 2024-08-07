import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{movie.Title}</h2>
        <p className="text-gray-600">{movie.Year}</p>
        <p className="text-gray-500">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
