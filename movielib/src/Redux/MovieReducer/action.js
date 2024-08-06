import { MOVIE_FETCH_REQUEST, MOVIE_FETCH_SUCCESS, MOVIE_FETCH_FAILURE } from './actionTypes';

// Action creators
export const fetchMoviesRequest = () => ({
  type: MOVIE_FETCH_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: MOVIE_FETCH_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: MOVIE_FETCH_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
      const response = await fetch('/path-to-your-api/movies'); // Update API path as needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchMoviesSuccess(data));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
};
