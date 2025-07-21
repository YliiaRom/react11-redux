import { configureStore } from "@reduxjs/toolkit";
import userNameSliceReducer from "@/components/redux-tollkit/slices/userName.js";
import usersSlice from "../slices/users/usersSlice.js";

export const storeWithToolkit = configureStore({
  reducer: {
    user_name: userNameSliceReducer,
    users: usersSlice,
  },
});
