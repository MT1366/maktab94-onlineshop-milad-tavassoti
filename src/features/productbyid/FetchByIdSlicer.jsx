import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsById = createAsyncThunk(
  "singleProduct/fetchProductById",
  async (id) => {
    const response = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );
    const productById = response.data.data;
    console.log(productById);
    return productById;
  }
);

const initialState = {
  productById: {},
};

const productIdSlicer = createSlice({
  name: "productFetchedById",
  initialState,
  reducers: {
    fetchById(state, action) {
      state.productById = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsById.fulfilled, (state, action) => {
      state.productById = action.payload;
      console.log(state);
    });
  },
});

export const { fetchById } = productIdSlicer.actions;

export default productIdSlicer.reducer;
