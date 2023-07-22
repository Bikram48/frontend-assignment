import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductSearch() {
  const searchQuery = useSelector((state) => state.searchQuery);
  const allProducts = useSelector((state) => state.products);

  const searchResults =
    (allProducts &&
      allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
      )) ||
    [];

  const renderProduct =
    searchResults &&
    searchResults.map((product) => {
      return <ProductCard item={product} />;
    });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {renderProduct}
    </div>
  );
}
