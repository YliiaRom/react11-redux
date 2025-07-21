import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchProductsByCategories,
  fetchProductsThunk,
} from "./productsThunk";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    delProducts: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ---categories
      .addCase(fetchCategories.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ---categories + type
      .addCase(fetchProductsByCategories.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProductsByCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProductsByCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default productSlice.reducer;
export const { delProducts } = productSlice.actions;
