function PostsItem({ item }) {
  return (
    <div>
      <h2>id:{item.id}</h2>
      <h3>{item.title}</h3>
      <p>price: {item.body}</p>
    </div>
  );
}

export default PostsItem;
// body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
// id: 1;
// title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
// userId: 1;
