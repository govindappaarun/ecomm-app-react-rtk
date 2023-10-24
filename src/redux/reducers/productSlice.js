import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FEATURE_PRODUCTS, PRODUCTS } from "./constants";

export const getFeatureProducts = createAsyncThunk(
  "featureProducts/get",
  async () => {
    const res = await axios.get(FEATURE_PRODUCTS);
    return res.data.data;
  }
);

export const getProducts = createAsyncThunk(
  "products/get",
  async (queryString) => {
    const res = await axios.get(
      `${PRODUCTS}?${queryString?.length ? queryString : ""}`
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    featureProducts: [],
    products: [],
    meta: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeatureProducts.fulfilled, (state, action) => {
      state.featureProducts = action.payload;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.meta = action.payload.meta;
    });
  },
});

export default productSlice.reducer;
