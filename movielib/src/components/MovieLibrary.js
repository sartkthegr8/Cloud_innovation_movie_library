import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

// Movie data
const initialMovies = [
    { "id": 1, "Title": "The Avengers", "Year": "2012", "imdbID": "tt0848228", "Type": "movie", "rating": 1, "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
    { "id": 2, "Title": "Avengers: Endgame", "Year": "2019", "imdbID": "tt4154796", "Type": "movie", "rating": 2, "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg" },
    { "id": 3, "Title": "Avengers: Infinity War", "Year": "2018", "imdbID": "tt4154756", "Type": "movie", "rating": 3, "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" },
    { "id": 4, "Title": "Avengers: Age of Ultron", "Year": "2015", "imdbID": "tt2395427", "Type": "movie", "rating": 4, "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg" },
    { "id": 5, "Title": "The Avengers", "Year": "1998", "imdbID": "tt0118661", "Type": "movie", "rating": 5, "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" },
    { "id": 6, "Title": "The Avengers: Earth's Mightiest Heroes", "Year": "2010", "imdbID": "tt1626038", "Type": "series", "rating": 1, "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg" },
    { "id": 7, "Title": "Ultimate Avengers: The Movie", "Year": "2006", "imdbID": "tt0491703", "Type": "movie", "rating": 2, "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg" },
    { "id": 8, "Title": "Ultimate Avengers II", "Year": "2006", "imdbID": "tt0803093", "Type": "movie", "rating": 3, "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" },
    { "id": 9, "Title": "The Avengers", "Year": "1961", "imdbID": "tt0054518", "Type": "series", "rating": 4, "Poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" },
    { "id": 10, "Title": "Avengers Assemble", "Year": "2012", "imdbID": "tt2455546", "Type": "series", "rating": 5, "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg" },
    { "id": 11, "Title": "Pirates of the Caribbean: The Curse of the Black Pearl", "Year": "2003", "imdbID": "tt0325980", "Type": "movie", "rating": 1, "Poster": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
    { "id": 12, "Title": "Pirates of the Caribbean: Dead Man's Chest", "Year": "2006", "imdbID": "tt0383574", "Type": "movie", "rating": 2, "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg" },
    { "id": 13, "Title": "Pirates of the Caribbean: At World's End", "Year": "2007", "imdbID": "tt0449088", "Type": "movie", "rating": 3, "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg" },
    { "id": 14, "Title": "Pirates of the Caribbean: On Stranger Tides", "Year": "2011", "imdbID": "tt1298650", "Type": "movie", "rating": 4, "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg" },
    { "id": 15, "Title": "Pirates of the Caribbean: Dead Men Tell No Tales", "Year": "2017", "imdbID": "tt1790809", "Type": "movie", "rating": 5, "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg" },
    { "id": 16, "Title": "The Pirates! Band of Misfits", "Year": "2012", "imdbID": "tt1430626", "Type": "movie", "rating": 1, "Poster": "https://m.media-amazon.com/images/M/MV5BNDhkOGZkZWMtNGI4Mi00ZWI3LTgyYTgtMDU4ZDI3NTNjMWFiXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg" },
    { "id": 17, "Title": "Pirates of Silicon Valley", "Year": "1999", "imdbID": "tt0168122", "Type": "movie", "rating": 2, "Poster": "https://m.media-amazon.com/images/M/MV5BNDc2NTE0NzE4N15BMl5BanBnXkFtZTgwMDQ5MzgwMzE@._V1_SX300.jpg" },
    { "id": 18, "Title": "Pirates of the Caribbean: The Legend of Jack Sparrow", "Year": "2006", "imdbID": "tt0815220", "Type": "game", "rating": 3, "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMDUwMjc3NV5BMl5BanBnXkFtZTcwNzMzNTQzMQ@@._V1_SX300.jpg" },
    { "id": 19, "Title": "The Ice Pirates", "Year": "1984", "imdbID": "tt0087451", "Type": "movie", "rating": 4, "Poster": "https://m.media-amazon.com/images/M/MV5BOTA1YWRlY2EtZGQ5ZS00Yzg3LTk0ZDYtZDMzNTEyYzczZjA3XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg" },
    { "id": 20, "Title": "The Pirates of Somalia", "Year": "2017", "imdbID": "tt5126922", "Type": "movie", "rating": 5, "Poster": "https://m.media-amazon.com/images/M/MV5BMjA2OTIwNjA0NV5BMl5BanBnXkFtZTgwMDYxNTYxNDM@._V1_SX300.jpg" }
  ];

const MovieLibrary = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [sortOrder, setSortOrder] = useState('asc');
  const [ratingFilter, setRatingFilter] = useState(0);

  // Sorting function
  const sortMovies = (order) => {
    const sortedMovies = [...movies].sort((a, b) => {
      return order === 'asc' ? a.Year - b.Year : b.Year - a.Year;
    });
    setMovies(sortedMovies);
  };

  // Filter function
  const filterMovies = (minRating) => {
    const filteredMovies = initialMovies.filter(movie => movie.rating >= minRating);
    setMovies(filteredMovies);
  };

  useEffect(() => {
    sortMovies(sortOrder);
  }, [sortOrder]);

  useEffect(() => {
    filterMovies(ratingFilter);
  }, [ratingFilter]);

  return (
    <div className="p-4">
      {/* <h1 className="text-3xl font-bold mb-4">Movie Library</h1> */}
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <div className="mb-4">
            <label htmlFor="sortOrder" className="block mb-2 text-lg font-semibold">Sort by Year:</label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="ratingFilter" className="block mb-2 text-lg font-semibold">Filter by Rating:</label>
            <input
              type="number"
              id="ratingFilter"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(Number(e.target.value))}
              min="1"
              max="5"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLibrary;
