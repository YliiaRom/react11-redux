import "./App.css";
import X from "./components/Acomponents";
import MainLayout from "./components/layouts/MainLayout";
import ClassLesson from "./components/NavBars/ClassLesson";
import Practice from "./pages/Practice";

function App() {
  return (
    <>
      <MainLayout />

      <Practice />
      <ClassLesson />
    </>
  );
}

export default App;
