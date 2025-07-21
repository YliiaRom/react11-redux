import { memo, useRef, useState } from "react";
import bgImg from "@/assets/img/toolkit.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  setUserName,
} from "@/components/redux-tollkit/slices/userName.js";

function NameUserRT() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const inputRef = useRef();

  const state = useSelector((state) => state.user_name.userName);
  console.log(`========= render NameUserRT(1)`);
  const dispatch = useDispatch();
  return (
    <>
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">4</p>
              <h2>
                <span>N</span>ame
              </h2>
              <div className="task">
                За допомогою toolkit виводити і змінювати значення ім'я
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
                    const initialState = &#123;
                    <br />
                    userName: "Yuliia", &#125;;
                    <br /> ------------- <br />
                    export const userNameSlice = <mark>createSlice(&#123;</mark>
                    <br />
                    <mark> name:</mark> "user-name",
                    <br /> <mark>initialState,</mark>
                    <br />
                    <mark> reducers: &#123;</mark> ,<br />
                    reset: (state) =&gt; &#123;,
                    <br /> state.userName = "not Name";,
                    <br /> &#125;
                    <br /> setUserName: (state, action) =&gt; &#123;
                    <br />
                    state.userName = action.payload;
                    <br />
                    &#125;,,
                    <br /> &#125;, ,<br />
                    &#125;);,
                  </p>
                  <hr />
                  <p>
                    export const &#123; reset, setUserName &#125; =
                    userNameSlice<mark>.actions</mark>;
                    <br />
                    export default userNameSlice<mark>.reducer</mark>;
                  </p>
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  підключення <br />
                  &lt;Provider store=&#123;storeWithToolkit&#125;&gt;
                  <br />
                  &lt;App/&gt;
                  <br />
                  &lt;/Provider&gt;
                </div>
              )}
            </div>
          </div>
          <p className="title">createSlice(&#123;</p>
        </div>
        <div
          className="imgBox"
          style={{ backgroundImage: `url(${bgImg})`, aspectRatio: "1 / 1.4" }}
        ></div>
        {/* ---------------рішення */}
        <div className="solution">
          <h3>
            configure <span>S</span>tore
          </h3>
          <div>
            Name: <span style={{ fontSize: "30px" }}>{state}</span>
          </div>
          <label>
            name: <input type="text" placeholder="yuliia..." ref={inputRef} />
          </label>
          <button
            className="mainBtn"
            onClick={() => dispatch(setUserName(inputRef.current.value))}
          >
            змінити ім'я
          </button>
          <button className="mainBtn" onClick={() => dispatch(reset())}>
            del name
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(NameUserRT);
