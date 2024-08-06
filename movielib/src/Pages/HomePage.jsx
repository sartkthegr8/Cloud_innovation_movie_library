import React, { useEffect, useState } from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../Redux/MovieReducer/action';

const HomePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const movies = useSelector((state) => state.movies.data); // Adjust based on your state structure
  const error = useSelector((state) => state.movies.error); // Adjust based on your state structure

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMovies());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error}</p>;

  return (
    <div className="homepage container mx-auto p-4 flex">
      <SideBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
