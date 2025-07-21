import CounterOldRedux from "@/components/CounterOldRedux";
import FetchUsersWithReduxThunkComp from "@/components/FetchUsersWithReduxThunkComp";
import TodoComp from "@/components/TodoComp";
import bgImg from "@/assets/img/leaf.png";

function Practice() {
  return (
    <>
      <div
        className="mainBgImg02"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <h4 className="mainTitle">Синхронні операції</h4>
      <CounterOldRedux />
      <TodoComp />
      <h4 className="mainTitle">АСинхронні операції</h4>

      <div className="subTitle">
        f =&gt; f <br />
        fetchXxx = () =&gt; async(dispatch, getState) =&gt; &#123;...&#125;
      </div>
      <FetchUsersWithReduxThunkComp />
    </>
  );
}

export default Practice;
