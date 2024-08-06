// src/Components/MovieList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const isError = useSelector((state) => state.movies.isError);

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(fetchMoviesRequest());
      try {
        const response = await fetch('/path-to-your-api');
        const data = await response.json();
        dispatch(fetchMoviesSuccess(data.movies));
      } catch (error) {
        dispatch(fetchMoviesFailure(error));
      }
    };

    fetchMovies();
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movies</p>;

  return (
    <div className="movie-list" data-testid="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
