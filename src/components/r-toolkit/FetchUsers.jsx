import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/components/redux-tollkit/slices/users/usersThunk.js";
import { clearUser } from "@/components/redux-tollkit/slices/users/usersSlice.js";
import { createSelector } from "@reduxjs/toolkit";
const countUsersWithCreateSelector = createSelector(
  [(state) => state.users.users],
  (users) => users.length
);

function FetchUsers() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const { users, loading, error } = useSelector((state) => state.users);
  const countUsers = useSelector(countUsersWithCreateSelector);
  const dispatch = useDispatch();

  console.log(`===========renderFetchUsers`);
  console.log(`---------useSelector > user =`, users);

  let content;
  if (users.length > 0)
    content = (
      <ul className="listTodo">
        {users.map((el) => (
          <li key={el.index}>
            <div>
              <p>{el.username}</p>
              <p>{el.email}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  else if (loading) content = <p>Loading...</p>;
  else if (error) content = <p>{error}</p>;
  else content = <p>not Data</p>;
  return (
    <>
      createSelector()
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">5</p>
              <h2>
                <span>U</span>sers
              </h2>
              <div className="task">
                Зробити запит використовуючи createAsyncThunk , обробити запит
                використовуючи extraReducers/ закешировати значення кількості
                users за допомогою createSelector()
              </div>
            </div>
            <div className="descriptionBtn">
              <div className="moreBtn" onClick={() => setIsOpenCode((v) => !v)}>
                CODE
              </div>
              <div className="moreBtn" onClick={() => setIsOpenMore((v) => !v)}>
                More
              </div>
            </div>

            <div>
              {isOpenCode && (
                <div className="moreBody" style={{ wordWrap: "break-word" }}>
                  <p className="subTitle">
                    <span style={{ color: "white" }}>📁</span>services -&gt;
                    <span style={{ color: "white" }}> 📄</span>userAPI.js
                  </p>
                  <p>
                    const BASE_URL = "https://jsonplaceholder.typicode.com";
                    <br />
                    export const<mark> userAPI = &#123;</mark>
                    <br />
                    <mark> fetchAllUsers: </mark>async (limit = 5) =&gt; &#123;
                    <br />
                    const res = await axios.get(`$&#123;BASE_URL&#125;/users`,
                    &#123;
                    <br />
                    params: &#123; _limit: limit &#125;,
                    <br />
                    &#125;);
                    <br />
                    return res.data;
                    <br />
                    &#125;,
                    <br />
                    <mark> fetchUserById:</mark> async (userId) =&gt; &#123;
                    <br />
                    const res = await
                    axios.get(`$&#123;BASE_URL&#125;/users/$&#123;userId&#125;`);
                    <br />
                    return res.data;
                    <br />
                    &#125;,
                    <br />
                    &#125;;
                  </p>
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  <div>
                    <p className="subTitle">
                      <span style={{ color: "white" }}>📁</span>redux --&gt;
                      <span style={{ color: "white" }}>📁</span>slices --&gt;
                      <span style={{ color: "white" }}>📁</span>users --&gt;
                      <br />
                      <span style={{ color: "white" }}> 📄</span>userThunk.js
                    </p>
                  </div>
                  <p>
                    export const fetchUsers =<mark> createAsyncThunk(</mark>
                    <br />
                    "users/fetchAll",
                    <br />
                    <br />
                    async (<mark> _ , </mark>&#123; rejectWithValue &#125;)
                    =&gt; &#123;
                    <br />
                    try &#123;
                    <br />
                    return await <mark>userAPI.fetchAllUsers</mark>(5);
                    <br />
                    &#125; <br />
                    catch (error) &#123;
                    <br />
                    return rejectWithValue(error.message);
                    <br />
                    &#125;
                    <br />
                    &#125; );
                  </p>
                  <hr />
                  <p>
                    fetchUserById = <mark>createAsyncThunk</mark>(<br />
                    "users/fetchById",
                    <br />
                    async (id, &#123; <mark>rejectWithValue</mark> &#125;) =&gt;
                    &#123;
                    <br />
                    try &#123;
                    <br />
                    return await userAPI.fetchUserById(id);
                    <br />
                    &#125; catch (error) &#123;
                    <br />
                    return <mark>rejectWithValue(error.message)</mark>;<br />
                    &#125;
                    <br />
                    &#125;
                    <br />
                    );
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="title">extraReducers: (builder) =&gt;</p>
        </div>
        <h3>
          createAsync<span>T</span>hunk(type, async(x, thunkAPI))
        </h3>
        {/* ----------------рішення */}
        <div className="solution">
          <h3>
            &#123;JSON&#125;place<span>h</span>older
          </h3>
          <p className="subTitle" style={{ color: "#174838" }}>
            <span style={{ color: "white" }}>📁</span>services -&gt;
            <span style={{ color: "white" }}> 📄</span>userAPI.js <br />
            <span style={{ color: "white" }}>📁</span>redux --&gt;{" "}
            <span style={{ color: "white" }}>📁</span>slices --&gt;{" "}
            <span style={{ color: "white" }}>📁</span>users --&gt;
            <br />
            <span style={{ color: "white" }}> 📄</span>userThunk.js <br />{" "}
            <span style={{ color: "white" }}> 📄</span>usersSlice.js
          </p>
          {/* ------users */}
          <p>Кількість users: {countUsers} </p>
          <div>{content}</div>
          <button className="mainBtn" onClick={() => dispatch(clearUser())}>
            delete List
          </button>
          <button className="mainBtn" onClick={() => dispatch(fetchUsers())}>
            fetch List
          </button>
        </div>
      </div>
    </>
  );
}

export default FetchUsers;
