import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Yuliia",
};

export const userNameSlice = createSlice({
  name: "user-name",
  initialState,
  reducers: {
    reset: (state) => {
      state.userName = "not Name";
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { reset, setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
