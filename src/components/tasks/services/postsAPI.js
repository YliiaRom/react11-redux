import axios from "axios";
const BASE_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const postsAPI = {
  getPostsALL: async () => {
    const res = await axios.get(`${BASE_URL_POSTS}`);
    const data = res.data;

    return data;
  },
};
export default postsAPI;
