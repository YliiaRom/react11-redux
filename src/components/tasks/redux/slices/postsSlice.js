import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsThunk";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsCol: [],
    loading: false,
    error: null,
  },
  reducers: {
    delPosts: (state) => {
      state.postsCol = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.postsCol = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
export default postsSlice.reducer;
export const { delPosts } = postsSlice.actions;
