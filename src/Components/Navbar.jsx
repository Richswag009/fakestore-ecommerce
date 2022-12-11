import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center  shadow-sm py-5 px-20 border">
      <h1 className="text-red-800 text-3xl">La Collection</h1>
      <div>
        <ul className="flex justify-around">
          <NavLink to="/" className="mr-5">
            Home
          </NavLink>
          <NavLink to="/products" className="mr-5">
            Product
          </NavLink>
          <NavLink to="/about">About us</NavLink>
        </ul>
      </div>
      <div>
        <NavLink to="/login">
          <button className="mr-3 py-1 px-5 rounded-md bg-slate-700 text-white">
            {" "}
            <i className="fa fa-sign-in"></i> Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="mr-3 py-1 px-5 rounded-md bg-slate-700 text-white">
            {" "}
            <i className="fa fa-sign-in"></i> Register
          </button>
        </NavLink>
        <NavLink to="/cart">
          <button className="mr-3">Cart</button>
        </NavLink>
      </div>
    </nav>
  );
}
