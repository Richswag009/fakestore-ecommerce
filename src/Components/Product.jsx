import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className=" h-[100%] text-center p-4 border shadow rounded">
      <img
        src={product.image}
        alt={product.title}
        className=" h-[250px] py-2"
      />
      <div>
        <h1 className="">{product.title.substring(0, 13)}</h1>
        <p className="font-bold">${product.price}</p>
        <Link to={`/products/${product.id}`}>
          <button className="py-1 px-3 text-slate-600 border bg-white rounded hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
