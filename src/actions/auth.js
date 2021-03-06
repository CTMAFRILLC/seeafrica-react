import axios from 'axios';
import { returnErrors, createMessage } from './messages';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get('https://ctmafri.herokuapp.com/api/auth/user/ ', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post('https://ctmafri.herokuapp.com/api/auth/login/', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};


// fACEBOOK lOGIN 
export const fbLogin = (accesstoken) => (dispatch) => {
  axios.post(
    "https://ctmafri.herokuapp.com/api/auth/facebook/",
    {
      access_token: accesstoken,
    }
  ).then((res) => {
    console.log("testdy", res.data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  })
  .catch((err) => {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: LOGIN_FAIL,
    });
  });
};

// GOOGLE lOGIN 


export const googleLogin = (accesstoken) => (dispatch) => {
  axios.post(
    "https://ctmafri.herokuapp.com/api/auth/google/",
    {
      access_token: accesstoken,
    }
  ).then((res) => {
    console.log("tesgoogletdy", res.data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  })
  .catch((err) => {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: LOGIN_FAIL,
    });
  });
};


// REGISTER USER
export const register = ({ username, email, password1, password2 }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password1, password2, });

  axios
    .post('https://ctmafri.herokuapp.com/api/auth/registration/', body, config)
    .then((res) => {
      const registerMsg = res.data.detail;
      dispatch(createMessage({ register: registerMsg }));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('https://ctmafri.herokuapp.com/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: 'CLEAR_LEADS' });
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;
  console.log("tokenconfig", token)

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
};
