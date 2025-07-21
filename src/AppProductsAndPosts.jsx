import { Outlet } from "react-router-dom";
import NavBarTasks from "./components/NavBars/NavBarTasks";
import MainPageTasks from "./pages/MainPageTasks";
import bgImg from "@/assets/img/leaf.png";
function AppProductsAndPosts() {
  return (
    <div className="sectionWrapTasks">
      <div
        className="mainBgImgTasks"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <h1>
        Practice: <br />
        бібліотеки: react-redux
        <br />
        @reduxjs/toolkit
        <br />
        --- <br />
        createSelector + useSelector + useDispatch
        <br /> createAsyncThunk + &#123;rejectedWithValue&#125;
        <br />
        extraReducers + builder + addCase
        <br /> configureStore() + &lt; Provider store=&#123;store...
        <br />
      </h1>
      <NavBarTasks />
      {/* <MainPageTasks /> */}
      <Outlet />
    </div>
  );
}

export default AppProductsAndPosts;
