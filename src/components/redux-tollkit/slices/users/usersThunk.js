import userAPI from "@/components/services/userAPI.js";

import { createAsyncThunk } from "@reduxjs/toolkit";
// import userAPI from "@/components/services/userApi.js";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await userAPI.fetchAllUsers(5);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      return await userAPI.fetchUserById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
