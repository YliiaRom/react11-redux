import NameUserRT from "@/components/NameUserRT";
import bgImg from "@/assets/img/leaf.png";
import FetchUsers from "@/components/r-toolkit/FetchUsers";

function PracticeWithToolkit() {
  return (
    <>
      <div
        className="mainBgImg"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <NameUserRT />
      <FetchUsers />
    </>
  );
}

export default PracticeWithToolkit;
