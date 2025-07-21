import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "../redux/slices/productsSlice";

export const storeProductsAndPosts = configureStore({
  reducer: {
    products: productSliceReducer,
  },
});
