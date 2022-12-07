import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./features/auth/authReducers";
import { sellerReducer } from "./features/seller/sellerReducers";

const reducer = combineReducers({
  auth: authReducer,
  seller: sellerReducer,
});

export const store = configureStore({
  reducer,
});
