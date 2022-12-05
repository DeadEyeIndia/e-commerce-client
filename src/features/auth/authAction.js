import axios from "axios";

import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  CLEAR_ERRORS,
} from "./authContants";

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_REQUEST });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `http://localhost:4000/v1/signin`,
      { email, password },
      config
    );

    dispatch({ type: SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SIGNIN_FAILURE, payload: error.response.data });
  }
};

export const signUp =
  (name, email, mobile, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: SIGNUP_REQUEST });

      const config = {
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const { data } = await axios.post(
        `http://localhost:4000/v1/signup`,
        { name, email, mobile, password, confirmPassword },
        config
      );

      dispatch({ type: SIGNUP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error.response.data });
    }
  };

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(
      `http://localhost:4000/v1/profile`,
      config
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAILURE, payload: error.response.data });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };

    await axios.get("http://localhost:4000/v1/signout", config);

    dispatch({ type: SIGNOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGNOUT_FAILURE, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
