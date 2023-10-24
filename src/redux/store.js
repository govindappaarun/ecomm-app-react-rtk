import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import themeSlice from "./reducers/themeSlice";
import productSlice from "./reducers/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeSlice,
    products: productSlice,
  },
});
