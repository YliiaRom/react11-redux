export const resetUserName = () => ({
  type: "DEL_USER_NAME",
});
export const updateUserName = (val) => ({
  type: "UPDATE_USER_NAME",
  payload: val,
});
