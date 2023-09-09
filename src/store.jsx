// import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import inventoryReducer from "./features/inventory/inventorySlice";
import productReducer from "./features/products/productSlice";
import orderSlice from "./features/orders/orderSlice";
import catSlice from "./features/category/categorySlice";
import subCatSlice from "./features/subcategory/subCategory";

const store = configureStore({
  reducer: {
    orders: orderSlice,
    products: productReducer,
    inventory: inventoryReducer,
    cat: catSlice,
    subCat: subCatSlice,
  },
});

export default store;
