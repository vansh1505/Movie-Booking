import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex px-5 h-12 bg-indigo-800 text-white justify-between items-center max-sm:flex-col max-sm:h-16">
        <Link to="/">
      <div className="flex gap-2 cursor-pointer items-center">
          <img className="h-10 " src="logo2.png" alt="Logo" />
          <span className="font-semibold tracking-wider text-lg">BookMySeat</span>
      </div>
        </Link>
      <ul className="flex snap-center gap-8">
        <li className="cursor-pointer hover:scale-110 transform duration-75">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:scale-110 transform duration-75">
          <Link to="/help">Help</Link>
        </li>
        <li className="cursor-pointer hover:scale-110 transform duration-75">
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
