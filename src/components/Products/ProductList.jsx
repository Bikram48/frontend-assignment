import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts);

  const renderProduct =
    allProducts &&
    allProducts.map((product) => {
      return <ProductCard item={product} />;
    });
  return <div className="grid grid-cols-4">{renderProduct}</div>;
}
