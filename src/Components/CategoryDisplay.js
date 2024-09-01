import React from "react";
import { useSelector } from "react-redux";
import CategoryDetails from "./Sub-Component/CategoryDetails";

function DisplayCategory() {
  const arrCategory = useSelector((state) => state.categoryR.arrCategory);
  return (
    <>
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {arrCategory.map((e,i) => (
            <CategoryDetails key={i} category={e} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayCategory;
