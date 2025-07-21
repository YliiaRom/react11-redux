import { memo, useDeferredValue, useMemo, useRef, useState } from "react";
import bgImg from "@/assets/img/comb.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/redux/actions/index.js";
import ListComp from "./ListComp";
import { resetUserName, updateUserName } from "@/redux/actions/user-name.js";

function TodoComp() {
  const state = useSelector((state) => state.todos.todos);
  const stateName = useSelector((state) => state.nameVal.userName);

  const dispatch = useDispatch();
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);

  const inputRef = useRef();
  const inputNameRef = useRef();

  console.log("--------------------------------------render(2) TodoComp");
  //--handler

  const handlerAdd = () => {
    console.log("---handlerAdd(2/2)");
    const val = inputRef.current.value.trim();
    if (val === "") return;
    dispatch(addTodo(val));
  };
  return (
    <>
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">2</p>
              <h2>
                <span>T</span>odo
              </h2>
              <div className="task">
                Відобразити Записник справ + інші компоненти (відображення
                ім'я), через combineReducers(). В консолі прослідкувати рендер
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
                  <p>📂reducers --&gt; 📄todo-reducer.js</p>
                  <hr />
                  <p>
                    export const initialState = &#123; <br />
                    todos: [],
                    <br />
                    &#125;;
                  </p>
                  <hr />
                  <p>
                    export const todoReducer = (state = initialState, actions)
                    =&gt; &#123;
                    <br />
                    let listTodo;
                    <br />
                    switch (actions.type) &#123;
                    <br />
                    case "ADD_TODO":
                    <br />
                    listTodo = &#123;
                    <br />
                    ...state,
                    <br />
                    todos: [<br />
                    ...state.todos,
                    <br />
                    &#123;
                    <br />
                    id: Date.now(),
                    <br />
                    text: actions.payload,
                    <br />
                    &#125;,
                    <br />
                    ],
                    <br />
                    &#125;;
                    <br />
                    break;
                  </p>
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  <p>
                    const rootReducer = combineReducers(&#123;
                    <br />
                    counter: counterReducer,
                    <br />
                    todos: todoReducer,
                    <br />
                    &#125;);
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="title">rootReducer = combineReducers&#123;&#125;</p>
        </div>
        <div
          className="imgBox"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "center -50px",
          }}
        ></div>

        {/* ================рішення */}

        <div className="solution">
          <h3>
            combine<span>R</span>educers(&#123; <br />
            x: a_reducer,
            <br /> y: b_reducer <br />
            &#125;)
          </h3>
          <label>
            todo
            <input
              ref={inputRef}
              type="text"
              placeholder="text ... /ref=&#123;inputRef&#125;"
            />
          </label>

          <button className="mainBtn" onClick={() => handlerAdd()}>
            add todo
          </button>
          <p className="codeTitle">useRef() + input </p>
          <p className="codeTitle">
            dispatch(addTodo(inputRef.current.value.trim()));
          </p>

          <ListComp list={state} />
          <hr />
          <h3>
            You are name: <span>{stateName}</span>
          </h3>
          <p className="codeTitle">
            const stateName = useSelector((state) =&gt; state. X.userName)
          </p>

          <label>
            you name <input type="text" ref={inputNameRef} placeholder="..." />
          </label>

          <button
            className="mainBtn"
            onClick={() => dispatch(updateUserName(inputNameRef.current.value))}
          >
            відобразити name
          </button>
          <button className="mainBtn" onClick={() => dispatch(resetUserName())}>
            delete name
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(TodoComp);
