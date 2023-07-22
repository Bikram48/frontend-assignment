import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const allProducts = useSelector((state) => state.products);
  const renderProduct =
    allProducts &&
    allProducts.map((product) => {
      return <ProductCard item={product} />;
    });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {renderProduct}
    </div>
  );
}
