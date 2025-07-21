import { Outlet } from "react-router-dom";
import NavBarStore from "../NavBars/NavBarStore";

function MainLayout() {
  return (
    <>
      <div className="subTitle">
        npm install redux react-redux
        <br />
        <span style={{ color: "white" }}>📁</span>redux --&gt;
        <br /> <span style={{ color: "white" }}>📁</span> action +
        <span style={{ color: "white" }}>📁</span>reducer&gt; --&gt;{" "}
        <span style={{ color: "white" }}> 📄</span>xxx.jsx
      </div>
      <NavBarStore />

      <div>
        <div className="subTitle ">
          npm install @reduxjs/toolkit <br />
          <span style={{ color: "white" }}>📁</span>redux --&gt;
          <span style={{ color: "white" }}>📁</span>slice --&gt;
          <span style={{ color: "white" }}> 📄</span>xxx.js <br />
          initialState + createSlice(&#123; name: a, initialState, reducers:
          &#123; x:... , y:... &#125; &#125; <br />
          <span style={{ color: "white" }}>📁</span>redux --&gt;{" "}
          <span style={{ color: "white" }}>📁</span>store --&gt;{" "}
          <span style={{ color: "white" }}> 📄</span>index.js)
          <br />
          <span>
            store = configureStore(&#123; reducer:&#123;
            <br /> name: xxxReducer, &#125;, &#125;)
          </span>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
