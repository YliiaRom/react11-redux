import axios from "axios";

const BASE_URL = "https://fakestoreapi.in/api/products";

export const productsApi = {
  // category
  fetchCategory: async () => {
    const res = await axios.get(`${BASE_URL}/category`);

    const data = res.data;
    return data;
  },
  //data
  fetchProducts: async () => {
    const res = await axios.get(`${BASE_URL}`);

    const data = res.data;
    return data;
  },
  //data + categories
  fetchProductsByCategories: async (categoriesType = "mobile") => {
    const res = await axios.get(`${BASE_URL}/category?type=${categoriesType}`);

    const data = res.data;
    console.log(` fetchProductsByCategories> data=`, data);

    return data;
  },
};
// "status": "SUCCESS",
// "message": "We have 6 categories to choose from.",
// "categories": [
//   "tv",
//   "audio",
//   "laptop",
//   "mobile",
//   "gaming",
//   "appliances"
// ]
//2222222

// "status": "SUCCESS",
// "message": "Here you go! You've received 2...",
// "products": [
//   {
//     "id": 1,
//     "title": "Sony WH-1000XM3 Bluetooth...",
//     "image": "https://storage...",
//     "price": 773,
//     "description": "Digital noise cancelling...",
//     "brand": "sony",
//     "model": "WH-1000XM3",
//     "color": "silver",
//     "category": "audio",
//     "discount": 11
//   },
