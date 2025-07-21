import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../services/productsApi.js";

export const fetchProductsThunk = createAsyncThunk(
  "products",
  async (_, { rejectWithValue }) => {
    try {
      return await productsApi.fetchProducts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "category",
  async (_, { rejectWithValue }) => {
    try {
      return productsApi.fetchCategory();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchProductsByCategories = createAsyncThunk(
  "category/type",
  async (categoriesType, { rejectWithValue }) => {
    try {
      return productsApi.fetchProductsByCategories(categoriesType);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
