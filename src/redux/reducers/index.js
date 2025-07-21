import { counterReducer } from "./counter01-reducer.js";
import todoReducer from "./todo-reducer.js";

import { combineReducers } from "redux";
import userNameReducer from "./user-name-reducer.js";
import { fetchUsers } from "../actions/fetch-users.js";
import { usersReducer } from "./users-reducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  nameVal: userNameReducer,
  usersWithPlaceholder: usersReducer,
});
export default rootReducer;
