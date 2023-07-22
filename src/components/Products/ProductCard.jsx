import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="m-4">
        <div className="h-[300px] mb-3">
          <img src={item.image} alt="" className="h-full hover:opacity-70" />
        </div>
        <div>
          <h2 className="mb-1">
            {item.title.length > 24
              ? item.title.slice(0, 24) + "..."
              : item.title}
          </h2>
          <p className="font-bold text-sm">${item.price}</p>
        </div>
      </div>
    </Link>
  );
}
