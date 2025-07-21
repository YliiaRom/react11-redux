const initialState = {
  userName: "Not Name",
};
const userNameReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "DEL_USER_NAME":
      console.log("---reducer-DEL_USER_NAME(2)");
      return initialState;
    case "UPDATE_USER_NAME":
      console.log("---reducer-UPDATE_USER_NAME(2)");
      return {
        ...state,
        userName: actions.payload,
      };
    default:
      return state;
  }
};
export default userNameReducers;
