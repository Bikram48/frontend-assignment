import React from "react";

export default function ProductCard({ item }) {
  console.log(item);
  return (
    <div className="m-4">
      <div className="h-[300px]">
        <img src={item.image} alt="" className="h-full" />
      </div>
      <div>
        <h2>
          {item.title.length > 24
            ? item.title.slice(0, 24) + "..."
            : item.title}
        </h2>
        <p>{item.price}</p>
      </div>
    </div>
  );
}
