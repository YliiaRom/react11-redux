import { useEffect, useState } from "react";
import bgImg from "@/assets/img/async.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/actions/fetch-users.js";

function FetchUsersWithReduxThunkComp() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state) => state.usersWithPlaceholder
  );
  console.log(`------FetchUsersWithReduxThunkComp`, users);
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);
  return (
    <>
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">3</p>

              <h2>
                <span>redux-thunk </span>
                бібліотека
                <br />
              </h2>
              <div className="task">
                Використовуючи бібліотеку зробити асинхроний запит для отримання
                данних про людей
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
                    export const fetchUsers = () =&gt; async(dispatch, getState)
                    =&gt; &#123;...&#125;
                  </p>
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  <p>
                    import &#123;thunk&#125; from "redux-thunk";
                    <br /> const store = createStore(rootReducer,
                    <mark> applyMiddleware(thunk)</mark>);
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="title">lorem4</p>
        </div>
        <div
          className="imgBox"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        {/* ===========рішення */}

        <div className="solution">
          <h3>
            json<span>P</span>laceholder
          </h3>
          <p>Список користувачей</p>

          <button className="mainBtn" onClick={() => dispatch(fetchUsers())}>
            Завантажити користувачей
          </button>
          {error && <p>Помилка завантаження</p>}
          {loading && <p>завантаження...</p>}
          <button
            className="openListBtn"
            onClick={() => setIsOpenList((v) => !v)}
          >
            показати список
          </button>
          {isOpenList && (
            <ul className="listTodo">
              {users.map((user) => (
                <li key={user.id}>
                  <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default FetchUsersWithReduxThunkComp;
