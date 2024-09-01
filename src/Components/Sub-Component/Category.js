import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, changeCategory, changeSlug } from "../../redux/Feature/categorySlice";
import { fetchProducts } from "../../redux/Feature/productSlice";

function Category() {
  const categoryState = useSelector((state) => state.categoryR);
  //{loading:false,arrCategory:[],error:'',selectedCategory:'Categories'}
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="col-lg-3 d-none d-lg-block">
        <span
          className="btn d-flex align-items-center justify-content-between bg-primary w-100"
          data-toggle="collapse"
          href="#navbar-vertical"
          style={{ height: 65, padding: "0 30px" }}
        >
          <h6 className="text-dark m-0">
            <i className="fa fa-bars mr-2" />
            {categoryState.selectedCategory}
          </h6>
          <i className="fa fa-angle-down text-dark" />
        </span>
        <nav
          className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
          id="navbar-vertical"
          style={{ width: "calc(100% - 30px)", zIndex: 999 }}
        >
          <div
            style={{ height: "350px", overflowY: "scroll" }}
            className="navbar-nav w-100"
          >
            {categoryState.arrCategory.map((e, i) => (
              <span
                key={i}
                style={{ cursor: "pointer" }}
                data-toggle="collapse"
                href="#navbar-vertical"
                onClick={() => {
                  dispatch(changeCategory(e.name));
                  dispatch(changeSlug(e.slug));
                }}
                className="nav-item nav-link cursor-pointer"
              >
                {e.name}
              </span>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Category;
