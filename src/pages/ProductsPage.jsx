import CategoriesList from "@/components/TaskComp/CategoriesList";
import ProductsList from "@/components/TaskComp/ProductsList";
import { delProducts } from "@/components/tasks/redux/slices/productsSlice.js";
import {
  fetchCategories,
  fetchProductsThunk,
} from "@/components/tasks/redux/slices/productsThunk.js";
import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const filterSelector = createSelector(
  [(state) => state.products.products.products, (_, filterVal) => filterVal],
  (products, filterText) => {
    if (!products) return [];

    return products.filter((product) =>
      product.title.toLowerCase().includes(filterText.toLowerCase())
    );
  }
);

function ProductsPage() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [filterVal, setFilterVal] = useState("");
  const inputRef = useRef();
  const handlerClick = () => {
    setFilterVal(inputRef.current.value);
  };
  const {
    products: productsData,
    categories,
    loading,
    error,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // dispatch(fetchProductsThunk());
  }, [dispatch]);

  // -------products
  let content;
  if (loading) content = <p>Loading...</p>;
  else if (error) content = <p> error</p>;
  else if (productsData.products)
    content = <ProductsList list={productsData?.products} />;
  else content = "not Data Products";
  // ----categories
  let categoriesContent;
  if (loading) categoriesContent = <p>Loading...</p>;
  else if (error) categoriesContent = <p> error</p>;
  else if (categories.categories)
    categoriesContent = <CategoriesList list={categories.categories} />;
  else categoriesContent = "not Data Categories";
  // ---------filter + input

  const filteredProducts = useSelector((state) =>
    filterSelector(state, filterVal)
  );

  let contentWithFilter;
  if (filterVal.trim() === "") contentWithFilter = <p> не фільтрували</p>;
  else if (filteredProducts?.length > 0)
    contentWithFilter = <ProductsList list={filteredProducts} />;
  else {
    contentWithFilter = <p>not Data Products + filters </p>;
  }
  // contentWithFilter;
  return (
    <>
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">1</p>
              <h2>
                Список <span>P</span>roducts з фільтрацією
              </h2>
              <div className="task">
                Створити список товарів. Має бути можливість додавання нового
                товару та фільтрації товарів за назвою (може бути одна сторінка,
                а можна додавання товарів зробити на окремій сторінці).
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
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
              )}
            </div>
          </div>
          <p className="title">createSelector()</p>
        </div>
        {/* ---------рішення */}
        <div className="solution">
          <h3>
            <span>P</span>roducts with FakeStoreAPI
          </h3>
          <div>{categoriesContent}</div>
          <label>
            фільтр <input type="text" placeholder="пошук..." ref={inputRef} />
          </label>
          <button
            className="mainBtn"
            onClick={() => handlerClick()}
            style={{ background: "transparent" }}
          >
            знайти з фільтром
          </button>
          <button className="mainBtn" onClick={() => dispatch(delProducts())}>
            Видалити товари
          </button>
          {contentWithFilter}
          <h2>Products</h2>

          <button
            className="mainBtn"
            onClick={() => dispatch(fetchProductsThunk())}
          >
            Відобразити всі товари
          </button>

          <div>{content}</div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
