import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchInventory = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await axios.get("http://localhost:8000/api/subcategories");
    console.log(response);
    const inventory = response.data.data.subcategories;
    // console.log(inventory);
    return inventory;
  }
);

const initialState = {
  inventory: [],
  isLodaing: false,
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
    builder.addCase(fetchInventory.fulfilled, (state, action) => {
      state.inventory = action.payload;
    });
  },
});

export default inventorySlice.reducer;
export const { getInventory } = inventorySlice.actions;
