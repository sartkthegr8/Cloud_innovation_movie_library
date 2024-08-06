import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
      return;
    }

    const fetchMovie = async () => {
      try {
        const response = await fetch(`/path-to-your-api/movies/${id}`);
        if (!response.ok) throw new Error('Movie not found');
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, isAuth, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-detail container mx-auto p-4">
      {movie ? (
        <div className="flex flex-col items-center">
          <img src={movie.Poster} alt={movie.Title} className="w-64 mb-4" />
          <h2 className="text-3xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-lg mb-2">Year: {movie.Year}</p>
          <p className="text-lg mb-2">Type: {movie.Type}</p>
          <p className="text-lg mb-2">Rating: {movie.rating}</p>
        </div>
      ) : (
        <p>No movie details available.</p>
      )}
    </div>
  );
};

export default MovieDetail;
