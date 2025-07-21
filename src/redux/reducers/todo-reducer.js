export const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, actions) => {
  let listTodo;
  switch (actions.type) {
    case "ADD_TODO":
      listTodo = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: actions.payload,
          },
        ],
      };
      break;

    case "REMOVE_TODO":
      listTodo = {
        users: [],
        ...state,
        todos: state.todos.filter((el) => el.id !== actions.payload),
      };
      break;
    default:
      listTodo = state;
  }
  return listTodo;
};
export default todoReducer;
