const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET_COUNT01":
      return {
        ...state,
        count: initialState.count,
      };
    case "CHANGE_WIDTH_INPUT":
      return {
        ...state,
        count: (initialState.count = actions.payload),
      };
    default:
      return initialState;
  }
};
