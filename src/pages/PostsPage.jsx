import PostsList from "@/components/TaskComp/PostsList";
import { delPosts } from "@/components/tasks/redux/slices/postsSlice.js";
import { fetchPosts } from "@/components/tasks/redux/slices/postsThunk.js";
import { createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const countPosts = createSelector(
  [(state) => state.posts.postsCol],
  (posts) => posts?.length
);

function PostPage() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const { postsCol, loading, error } = useSelector((state) => state.posts);
  const lengthPosts = useSelector(countPosts);
  const dispatch = useDispatch();
  const handlerClickAddPosts = () => {
    dispatch(fetchPosts());
  };

  // -------content
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error...{error}</p>;
  } else if (postsCol?.length > 0) {
    content = <PostsList list={postsCol} />;
  }

  return (
    <>
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">2</p>
              <h2>
                Список <span>п</span>остів з API
              </h2>
              <div className="task">
                Завантажити список постів з публічного API
                (https://jsonplaceholder.typicode.com/posts) та відобразити їхні
                заголовки. Додати індикатор завантаження та повідомлення про
                помилку.
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
                  const countPosts = <mark>createSelector</mark>( [(state) =&gt;
                  <br />
                  state.posts.postsCol], (posts) =&gt; posts?.length );
                  <br />
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  <mark> services &gt; postsAPI.js</mark>
                  <br />
                  const BASE_URL_POSTS =
                  "https://jsonplaceholder.typicode.com/posts";
                  <br />
                  const<mark> postsAPI</mark> = &#123;
                  <br />
                  <mark> getPostsALL:</mark> async () =&gt; &#123;
                  <br />
                  const res = await axios.get(`$&#123;BASE_URL_POSTS&#125;`);
                  <br />
                  const data = <mark>res.data</mark>;<br />
                  console.log(data);
                  <br />
                  return data;
                  <br />
                  &#125;,
                  <br />
                  &#125;;
                  <br />
                </div>
              )}
            </div>
          </div>
          <p className="title">createAsyncThunk()</p>
        </div>

        <div className="solution">
          <h3>
            <span>j</span>sonplaceholder.com
          </h3>

          <h3>
            Кількість постів:
            <span>{lengthPosts}</span>
          </h3>

          <button className="mainBtn" onClick={handlerClickAddPosts}>
            Завантажити пости
          </button>
          <button className="mainBtn" onClick={() => dispatch(delPosts())}>
            Видалити пости
          </button>
          {content}
        </div>
      </div>
    </>
  );
}

export default PostPage;
