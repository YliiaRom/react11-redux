import PostsItem from "./PostsItem";

function PostsList({ list }) {
  return (
    <ul className="productsList">
      {list.map((item) => (
        <li key={item.id}>
          <PostsItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
