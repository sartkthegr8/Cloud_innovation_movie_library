// src/Redux/MovieReducer/reducer.js
import { MOVIE_FETCH_REQUEST, MOVIE_FETCH_SUCCESS, MOVIE_FETCH_FAILURE } from './actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case MOVIE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default movieReducer;
