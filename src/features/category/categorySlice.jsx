import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchByCategory",
  async () => {
    const response = await axios.get("http://localhost:8000/api/categories");
    const category = response.data.data.categories;
    console.log(category);
    return category;
  }
);

const initialState = {
  categories: [],
};

const catSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      console.log(state.categories);
    });
  },
});

export const { getCategories } = catSlice.actions;
export default catSlice.reducer;
