import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUsers,
  fetchUserById,
} from "@/components/redux-tollkit/slices/users/usersThunk.js";
const initialState = {
  users: [],
  loading: false,
  error: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.users = action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // --------fetch by ID
      .addCase(fetchUserById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.users = [];
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default usersSlice.reducer;
export const { clearUser } = usersSlice.actions;
