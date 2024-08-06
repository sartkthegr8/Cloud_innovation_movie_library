// src/Redux/AuthReducer/action.js

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  try {
    // Simulate login API call
    const token = 'mockToken'; // Replace with actual API call
    localStorage.setItem('authToken', token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: token });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', error: 'Invalid username or password' });
  }
};

export const signup = (credentials) => async (dispatch) => {
  dispatch({ type: 'SIGNUP_REQUEST' });
  try {
    // Simulate signup API call
    const token = 'mockToken'; // Replace with actual API call
    localStorage.setItem('authToken', token);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: token });
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', error: 'Signup failed' });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('authToken');
  dispatch({ type: 'LOGOUT' });
};
