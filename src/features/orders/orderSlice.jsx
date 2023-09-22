import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await axios.get("http://localhost:8000/api/products");
    console.log(response);
    const orders = response.data.data.products;
    // console.log(orders);
    return orders;
  }
);

const initialState = {
  orders: [],
  deliveredOrders: [],
  pendingDeliveryOrders: [],
  isLoading: false,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrder(state, action) {
      state.orders = action.payload;
      state.showOrder = true;
    },
    pendingDeliveryOrders(state, action) {
      state.pendingDeliveryOrders = action.payload;
      state.showOrder = false;
    },
    deliveredOrders(state, action) {
      state.deliveredOrders = action.payload;
      state.showOrder = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
    });
  },
});

export default orderSlice.reducer;
export const { getOrder, getPendingDeliveryOrders, getDeliveredOrders } =
  orderSlice.actions;
