import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await axios.get("http://localhost:8000/api/categories");
    const products = response.data.data.categories;
    return products;
  }
);

const initialState = {
  products: [],
  addProducts: [],
  addProductModal: false,
};

const productSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.addProductModal = action.payload;
      state.addProductModal = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
export const { getProduct, addProduct } = productSlice.actions;
