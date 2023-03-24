import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton";

export default function Navbar() {
  return (
    <nav className="mx-10 lg:mx-20 flex justify-between items-center py-5">
      <NavLink to="/">
        <h1 className="text-3xl">J-<span className="text-slate-900 text-xl">Thrifts</span></h1>
      </NavLink>
      <div>
        <NavLink to="/cart">
          <CartButton />
        </NavLink>
      </div>
    </nav>
  );
}
