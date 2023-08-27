import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchByProduct",
  async (page) => {
    const response = await axios.get(
      `http://localhost:8000/api/products?page=${page}`
    );
    const products = response.data.data.products;
    // console.log(products);
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

export const { getProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;
