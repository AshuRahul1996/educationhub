import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changeSlug } from "../../redux/Feature/categorySlice";

// function getFilteredArray(categoryName, arrProducts) {
//   var arrFilter = arrProducts.filter(
//     (e) => e.category.toUpperCase() === categoryName.toUpperCase()
//   );
//   return arrFilter;
// }
function getFilteredArray(selectedSlug, arrProducts) {
  let arrFilteredProducts = arrProducts.filter(
    (e) => e.category.toUpperCase() == selectedSlug.toUpperCase()
  );
  return arrFilteredProducts;
}
function CategoryDetails({ category }) {
  const dispatch = useDispatch();
  const arrProducts = useSelector((state) => state.productR.arrProducts);
  var arrFilteredProduct = getFilteredArray(category.slug, arrProducts);
  if (arrFilteredProduct.length === 0) {
    return "";
  }
  return (
    <>
      <div
        onClick={() => {
          dispatch(changeCategory(category.name));
          dispatch(changeSlug(category.slug));
        }}
        className="col-lg-3 col-md-4 col-sm-6 pb-1"
        style={{ cursor: "pointer" }}
      >
        <span className="text-decoration-none">
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src={arrFilteredProduct[0].thumbnail}
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>{category.name}</h6>
              <small className="text-body">
                {arrFilteredProduct.length} Products
              </small>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export default CategoryDetails;
