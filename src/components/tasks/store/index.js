import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "../redux/slices/productsSlice";
import postsSliceReducer from "@/components/tasks/redux/slices/postsSlice.js";
export const storeProductsAndPosts = configureStore({
  reducer: {
    products: productSliceReducer,
    posts: postsSliceReducer,
  },
});
