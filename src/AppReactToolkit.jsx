import "./App.css";
import X from "./components/Acomponents";
import MainLayout from "./components/layouts/MainLayout";
import Practice from "./pages/Practice";
import PracticeWithToolkit from "./pages/PracticeWithToolkit";

function AppReactToolkit() {
  return (
    <>
      <MainLayout />
      <h4>
        📄.js( initialState&#123;...&#125; + createSlice
        (&#123;...&#125;))---&gt;
        <br /> 📄.js (configureStore(&#123;...&#125;) ---&gt;);
        <br />
        📄main.jsx( &lt;Provider store=&#123;x&#125;)
      </h4>
      <PracticeWithToolkit />
    </>
  );
}

export default AppReactToolkit;
