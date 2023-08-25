// import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import inventoryReducer from "./features/inventory/inventorySlice";
import productReducer from "./features/products/productSlice";
import orderSlice from "./features/orders/orderSlice";

const store = configureStore({
  reducer: {
    orders: orderSlice,
    products: productReducer,
    inventory: inventoryReducer,
  },
});

export default store;
