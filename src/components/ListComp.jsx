import { memo } from "react";
import Item from "./Item";

function ListComp({ list }) {
  console.log("=====render-ListComp in 2");
  return (
    <ul className="listTodo">
      {list.map((item) => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}

export default memo(ListComp);
