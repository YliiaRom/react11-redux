import { removeTodo } from "@/redux/actions/index.js";
import { useDispatch } from "react-redux";

function Item({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="itemWithDel">
      <div>{item.text}</div>
      <button onClick={() => dispatch(removeTodo(item.id))}>del</button>
    </div>
  );
}

export default Item;
