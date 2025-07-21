export const fetchUsersRequest = () => ({
  type: "FETCH_USERS_REQUEST",
});

export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});
export const fetchUsersError = (error) => ({
  type: "FETCH_USERS_ERROR",
  payload: error,
});

export const fetchUsers = () => async (dispatch, getState) => {
  dispatch(fetchUsersRequest());

  try {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=5`
    );
    console.log(` 3--fetchUsers/resp=`, resp);
    if (!resp.ok) throw new Error("помилка мережі");
    const data = await resp.json();
    console.log(` 3--fetchUsers/data=`, data);
    dispatch(fetchUsersSuccess(data));
    //-- відправка результ
    const dataUsers = getState().usersWithPlaceholder.users;
    console.log(` 3--fetchUsers/getState()).usersWithPlaceholder.users`, resp);
    if (dataUsers.length > 0) {
      console.log("getState().users-поорожній", dataUsers);
    }
  } catch (error) {
    dispatch(fetchUsersError(error.message));
  }
};
