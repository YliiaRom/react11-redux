import imgCard from "../../assets/img/disp.jpg";
function ProductItem({ item }) {
  return (
    <div>
      <img src={item.image || imgCard} alt={item.title} />
      <div>
        <h3>{item.brand}</h3>
        <p>{item.title}</p>
        <p className="price">price: {item.price}$</p>
        <p>category: {item.category}</p>
      </div>
    </div>
  );
}

export default ProductItem;
