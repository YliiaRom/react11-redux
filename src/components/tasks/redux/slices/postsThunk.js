import { createAsyncThunk } from "@reduxjs/toolkit";
import postsAPI from "../../services/postsAPI";

export const fetchPosts = createAsyncThunk(
  "fetch-posts",
  async (_, { rejectWithValue }) => {
    try {
      return await postsAPI.getPostsALL();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
