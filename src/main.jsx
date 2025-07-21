// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppReactToolkit from "./AppReactToolkit";
import MainLayout from "./components/layouts/MainLayout";
import { storeWithToolkit } from "./components/redux-tollkit/store";
import AppProductsAndPosts from "./AppProductsAndPosts";
import ProductsPage from "./pages/ProductsPage";
import PostPage from "./pages/PostsPage";
import { storeProductsAndPosts } from "./components/tasks/store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<MainLayout />}> */}
      <Route path="/" element={<MainLayout />} />
      <Route
        path="/create-stor"
        element={
          <Provider store={store}>
            <App />
          </Provider>
        }
      />
      <Route
        path="/redux-toolkit"
        element={
          <Provider store={storeWithToolkit}>
            <AppReactToolkit />
          </Provider>
        }
      />

      <Route
        path="/tasks"
        element={
          <Provider store={storeProductsAndPosts}>
            <AppProductsAndPosts />
          </Provider>
        }
      >
        <Route index element={<ProductsPage />} />
        <Route path="posts" element={<PostPage />} />
      </Route>
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);
