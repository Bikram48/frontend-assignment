import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const allProducts = useSelector((state) => state.products);
  const renderProduct =
    allProducts &&
    allProducts.map((product) => {
      return <ProductCard item={product} />;
    });
  return (
    <>
      {allProducts ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3">
          {renderProduct}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
