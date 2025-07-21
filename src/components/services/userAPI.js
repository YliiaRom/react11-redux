import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const userAPI = {
  fetchAllUsers: async (limit = 5) => {
    const res = await axios.get(`${BASE_URL}/users`, {
      params: { _limit: limit },
    });
    return res.data;
  },

  fetchUserById: async (userId) => {
    const res = await axios.get(`${BASE_URL}/users/${userId}`);
    return res.data;
  },
};
export default userAPI;
