import { useState } from "react";
import bgImg from "@/assets/img/disp.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset_counter01,
  changeCount,
} from "@/redux/actions";
function CounterOldRedux() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const count = useSelector((state) => state.counter.count);
  console.log(`count`, count);
  const dispatch = useDispatch();

  // --input
  const handlerInput = (e) => {
    setValueInput(e.target.value);
  };
  return (
    <>
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">1</p>
              <h2>
                <span>C</span>ounter
              </h2>
              <div className="task">
                <p>Зробити лічильник</p>
                <p>якщо вводимо значення- воно відображається в лічильнику</p>
              </div>
            </div>
            <div className="descriptionBtn">
              <div className="moreBtn" onClick={() => setIsOpenCode((v) => !v)}>
                Code
              </div>
              <div className="moreBtn" onClick={() => setIsOpenMore((v) => !v)}>
                More
              </div>
            </div>

            <div>
              {isOpenCode && (
                <div className="moreBody">
                  <p>
                    🗂️src&gt; 🗂️redux&gt; 🗂️actions
                    <br /> &gt; 📄xxx.js =[export const x= () =&gt; (&#123;
                    type: xxx&#125;)]
                    <br /> 🗂️src&gt; 🗂️redux&gt; 🗂️reducers
                  </p>
                  <hr />
                  <p>
                    export const increment = () =&gt; (&#123; <br />
                    type: 'INCREMENT',
                    <br />
                    &#125;);
                    <br />
                  </p>
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  <p>🗂️src&gt; 🗂️redux&gt; 🗂️reducers &gt; xxx.js</p>
                  <hr />
                  <p>const initialState= &#123; count: 0&#125;</p>

                  <p>
                    export const counterReducer = (state = <br />
                    initialState, actions) =&gt; &#123;
                    <br />
                    switch (actions.type) &#123;
                    <br />
                    case "INCREMENT":
                    <br />
                    return &#123;
                    <br />
                    ...state,
                    <br />
                    count: state.count + 1,
                    <br />
                    &#125;;...
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="title">createStore = old!</p>
        </div>
        <div
          className="imgBox"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        {/* =====================рішення */}
        <div className="solution">
          <h3>
            use<span>S</span>elector() + use<span>D</span>ispatch()
          </h3>
          <h3>
            Count: <span>{count}</span>
          </h3>
          <label>
            введіть число
            <input
              type="number"
              placeholder="number..."
              value={valueInput}
              onChange={handlerInput}
            />
          </label>
          <button
            className="mainBtn"
            onClick={() => (
              dispatch(changeCount(Number(valueInput))), setValueInput("")
            )}
          >
            input-Value = Count
          </button>

          <button className="mainBtn" onClick={() => dispatch(increment())}>
            increment
          </button>
          <button className="mainBtn" onClick={() => dispatch(decrement())}>
            decrement
          </button>
          <button
            className="mainBtn"
            onClick={() => dispatch(reset_counter01())}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterOldRedux;
