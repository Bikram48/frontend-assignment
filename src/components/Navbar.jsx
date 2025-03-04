import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setToggle } from "../redux/actions/actions";
import { searchQuery } from "../redux/actions/actions";
import { AiOutlineArrowRight } from "react-icons/ai";

export const NavbarWithSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchResult = (e) => {
    e.preventDefault();
    dispatch(searchQuery(query));
  };

  return (
    <div className="p-4 md:flex md:justify-between md:p-6 border-b border-[#29282c]">
      <div className="flex justify-between items-center mb-5 md:mb-0">
        <Link to="/">
          <h1 className="text-2xl font-bold">OnlineStore</h1>
        </Link>
        <FaBars
          className="md:hidden"
          onClick={() => dispatch(setToggle(true))}
        />
      </div>
      <div>
        <form
          className="flex gap-2 items-center"
          action=""
          onSubmit={searchResult}
        >
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full rounded-lg h-8 p-4 text-sm font-roboto text-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#29282c] p-3 rounded-full hover:opacity-70"
          >
            <AiOutlineArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};
export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="p-4 md:flex md:justify-between md:p-6 border-b border-[#29282c]">
      <div className="flex justify-between items-center mb-5 md:mb-0">
        <Link to="/">
          <h1 className="text-2xl font-bold">OnlineStore</h1>
        </Link>
        <FaBars
          className="md:hidden"
          onClick={() => dispatch(setToggle(true))}
        />
      </div>
    </div>
  );
}
