import ProductItem from "./ProductItem";

function ProductsList({ list }) {
  return (
    <ul className="productsList">
      {list.map((item) => (
        <li key={item.id}>
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
