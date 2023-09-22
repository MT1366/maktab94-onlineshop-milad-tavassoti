// import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import inventoryReducer from "./features/inventory/inventorySlice";
import productReducer from "./features/products/productSlice";
import orderSlice from "./features/orders/orderSlice";
import catSlice from "./features/category/categorySlice";
import subCatSlice from "./features/subcategory/subCategory";
import productIdSlicer from "./features/productbyid/FetchByIdSlicer";

const store = configureStore({
  reducer: {
    orders: orderSlice,
    products: productReducer,
    productById: productIdSlicer,
    inventory: inventoryReducer,
    cat: catSlice,
    subCat: subCatSlice,
  },
});
// store.subscribe(() => console.log(store.getState()));

export default store;
