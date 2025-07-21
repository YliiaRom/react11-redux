const initialState = {
  users: [],
  loading: false,
  error: null,
};
export const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: actions.payload,
        error: false,
      };
    case "FETCH_USERS_ERROR":
      return {
        loading: false,

        error: actions.payload,
      };
    default:
      return state;
  }
};
