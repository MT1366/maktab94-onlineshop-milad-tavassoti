import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubCategories = createAsyncThunk(
  "subcategory/fetchBySubCategory",
  async () => {
    const response = await axios.get("http://localhost:8000/api/subcategories");
    const subCategories = response.data.data.subcategories;
    return subCategories;
  }
);

const initialState = {
  subCat: [],
};

const subCatSlice = createSlice({
  name: "subcategories",
  initialState,
  reducers: {
    getSubCategories(state, action) {
      state.subCat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubCategories.fulfilled, (state, action) => {
      state.subCat = action.payload;
    });
  },
});

export const { getSubCategories } = subCatSlice.actions;
export default subCatSlice.reducer;
