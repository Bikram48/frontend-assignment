import React from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="p-4 md:flex md:justify-between md:p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-bold">OnlineStore</h1>
        <FaBars className="md:hidden" />
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
