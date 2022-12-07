import {
  SELLER_CREATE_REQUEST,
  SELLER_CREATE_SUCCESS,
  SELLER_CREATE_FAILURE,
  SELLER_ACCOUNT_REQUEST,
  SELLER_ACCOUNT_SUCCESS,
  SELLER_ACCOUNT_FAILURE,
  CLEAR_ERRORS,
} from "./sellerContants";

export const sellerReducer = (state = { seller: {} }, action) => {
  switch (action.type) {
    case SELLER_CREATE_REQUEST:
    case SELLER_ACCOUNT_REQUEST:
      return {
        loading: true,
        success: false,
        seller: null,
      };
    case SELLER_CREATE_SUCCESS:
    case SELLER_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        seller: action.payload,
      };
    case SELLER_CREATE_FAILURE:
    case SELLER_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        seller: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
