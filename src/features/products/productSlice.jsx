import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../configs/constants";

import privateAxios from "../../../services/instances/privateAxios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async (page) => {
    const response = await axios.get(
      `http://localhost:8000/api/products?page=${page}`
    );
    const products = response.data.data.products;

    return products;
  }
);

export const postProducts = createAsyncThunk(
  "addProduct/postProduct",
  async (form, thunkAPI) => {
    try {
      // products-64fc9c5eeace44f8a91cd011-1694276702081-1.jpeg

      // 2.UPLOAD IMAGE
      const imageName = `products-${
        form.id
      }-${Math.random()}-1.jpeg`.replaceAll("/", "");

      const imagePath = `${BASE_URL}/${imageName}`;
      // 1. CREATE PRODUCT
      const response = await privateAxios.post(
        "http://localhost:8000/api/products",
        { ...form, image: imagePath },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const goods = response.data.data.products;

      console.log(goods);
      return goods;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.products = action.payload;
    },
    postProductToState: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(postProducts.fulfilled, (state, action) => {
        console.log("payload:", action.payload);
        state.products.push(action.payload);
      });
  },
});

export const { getProduct, addProduct, fetchProductById, postProductToState } =
  productSlice.actions;

export default productSlice.reducer;
