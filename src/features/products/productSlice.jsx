import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchProductsById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const respons = await axios.get(
      `http://localhost:8000/api/products/&${id}`
    );
    const productById = respons.data.data.products;
    return productById;
  }
);

export const postProducts = createAsyncThunk(
  "addProduct/postProduct",
  async (form, thunkAPI) => {
    try {
      const response = await privateAxios.post(
        "http://localhost:8000/api/products",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // const goods = response.data.data.products;
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: [],
  productsById: [],
};

const productSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(postProducts.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(fetchProductsById.fulfilled, (state, action) => {
      state.productsById = action.payload;
    });
  },
});

export const { getProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;
