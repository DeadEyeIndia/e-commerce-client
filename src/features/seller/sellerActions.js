import axios from "axios";

import {
  SELLER_CREATE_REQUEST,
  SELLER_CREATE_SUCCESS,
  SELLER_CREATE_FAILURE,
  SELLER_ACCOUNT_REQUEST,
  SELLER_ACCOUNT_SUCCESS,
  SELLER_ACCOUNT_FAILURE,
  CLEAR_ERRORS,
} from "./sellerContants";

export const newSeller = (createSeller) => async (dispatch) => {
  try {
    dispatch({ type: SELLER_CREATE_REQUEST });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `http://localhost:4000/v1/seller/new`,
      createSeller,
      config
    );

    dispatch({ type: SELLER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SELLER_CREATE_FAILURE, payload: error.response.data });
  }
};

export const mySellerAccount = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_ACCOUNT_REQUEST });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.get(
      `http://localhost:4000/v1/seller/me/profile`,
      config
    );

    dispatch({ type: SELLER_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SELLER_ACCOUNT_FAILURE, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
