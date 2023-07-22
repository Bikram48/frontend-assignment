import React from "react";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setToggle } from "../redux/actions/actions";
import { AiFillHome } from "react-icons/ai";
import { BsBoxFill } from "react-icons/bs";
import ProductList from "./Products/ProductList";

export default function Sidebar() {
  const dispatch = useDispatch();

  const isMobileToggle = useSelector((state) => {
    console.log(state);
    return state.isToggle;
  });

  return (
    <div className="flex items-start">
      {isMobileToggle ? (
        <div className="bg-[#1C1B23] h-screen w-screen absolute top-0">
          <div
            className="flex justify-end m-2"
            onClick={() => dispatch(setToggle(false))}
          >
            <ImCross />
          </div>
        </div>
      ) : (
        <div className="bg-[#1C1B23] h-auto w-[200px] rounded-xl md:m-6 p-4">
          <a href="" className="flex gap-4 items-center mb-6 menu-item-hover">
            <AiFillHome />
            Home
          </a>
          <a
            href=""
            className="flex gap-4 items-center select2-search menu-item-hover"
          >
            <BsBoxFill />
            Product
          </a>
        </div>
      )}

      <div className="md:m-6 p-4">
        <ProductList />
      </div>
    </div>
  );
}
