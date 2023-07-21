import React from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setToggle } from "../redux/actions/actions";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="p-4 md:flex md:justify-between md:p-6 border-b border-gray">
      <div className="flex justify-between items-center mb-5 md:mb-0">
        <h1 className="text-xl font-bold">OnlineStore</h1>
        <FaBars
          className="md:hidden"
          onClick={() => dispatch(setToggle(true))}
        />
      </div>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full rounded-lg h-8 p-4 text-sm font-roboto"
          />
        </form>
      </div>
    </div>
  );
}
