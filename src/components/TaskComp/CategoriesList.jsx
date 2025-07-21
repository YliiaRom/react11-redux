import CategoriesItem from "./CategoriesItem";

function CategoriesList({ list }) {
  return (
    <ul className="categoriesList">
      {list.map((item, index) => (
        <li key={index}>
          <CategoriesItem item={item} />
        </li>
      ))}
    </ul>
  );
}
export default CategoriesList;
