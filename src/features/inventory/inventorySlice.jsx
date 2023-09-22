import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchInventory = createAsyncThunk(
  "inventory/fetchByInventory",
  async (page) => {
    const response = await axios.get(
      `http://localhost:8000/api/products?page=${page}`
    );
    console.log(response);
    const inventory = response.data.data.products;
    // console.log(inventory);
    return inventory;
  }
);

const initialState = {
  inventory: [],
  isLoading: false,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    getInventory(state, action) {
      state.inventory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInventory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchInventory.fulfilled, (state, action) => {
      state.inventory = action.payload;
      state.isLoading = false;
    });
  },
});

export default inventorySlice.reducer;
export const { getInventory } = inventorySlice.actions;
