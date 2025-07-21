export const increment = () => ({
  type: "INCREMENT",
});
export const decrement = () => ({
  type: "DECREMENT",
});
export const reset_counter01 = () => ({
  type: "RESET_COUNT01",
});
export const changeCount = (value) => ({
  type: "CHANGE_WIDTH_INPUT",
  payload: value,
});
export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});
export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});
