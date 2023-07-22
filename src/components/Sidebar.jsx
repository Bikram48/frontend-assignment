import React from "react";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setToggle } from "../redux/actions/actions";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import ProductList from "./Products/ProductList";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();

  const isMobileToggle = useSelector((state) => {
    return state.isToggle;
  });

  return (
    <>
      {isMobileToggle ? (
        <div className="bg-[#1C1B23] h-screen w-screen absolute top-0 animate-scaleUp">
          <div
            className="flex justify-end m-4"
            onClick={() => dispatch(setToggle(false))}
          >
            <ImCross />
          </div>
          <div className="bg-[#1C1B23] h-auto w-[150px] md:w-[200px] rounded-xl md:m-6 p-4">
            <Link
              to="/"
              className="flex gap-4 items-center mb-6 menu-item-hover"
            >
              <AiFillHome />
              Home
            </Link>
            <Link
              to="/search"
              className="flex gap-4 items-center select2-search menu-item-hover"
            >
              <AiOutlineSearch />
              Search
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-[#1C1B23] h-auto w-[150px] md:w-[200px] rounded-xl md:m-6 p-4 hidden md:block">
          <Link to="/" className="flex gap-4 items-center mb-6 menu-item-hover">
            <AiFillHome />
            Home
          </Link>
          <Link
            to="/search"
            className="flex gap-4 items-center select2-search menu-item-hover"
          >
            <AiOutlineSearch />
            Search
          </Link>
        </div>
      )}
    </>
  );
}
