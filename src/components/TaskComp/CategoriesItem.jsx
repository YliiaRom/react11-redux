import { useDispatch } from "react-redux";
import { fetchProductsByCategories } from "../tasks/redux/slices/productsThunk.js";

function CategoriesItem({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => dispatch(fetchProductsByCategories(item))}>
        {item}
      </div>
    </>
  );
}

export default CategoriesItem;
