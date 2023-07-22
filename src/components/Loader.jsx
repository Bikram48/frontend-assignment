import React from "react";
import LoaderImg from "../assets/Loader.gif";

export default function Loader() {
  return (
    <div className="flex justify-center w-full">
      <img src={LoaderImg} alt="" />
    </div>
  );
}
