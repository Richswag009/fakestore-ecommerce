import React from "react";
import { Link } from "react-router-dom";
import Card from "../Utils/Card";

export default function ProductItem({ product }) {
  return (
    <Card>
      <img
        src={product.image}
        alt={product.title}
        className="w-full p-2  h-3/5 py-2"
      />
      <div className="p-4">
        <h1 className="">{product.title.substring(0, 35)}</h1>
        <p className="font-bold">${product.price}</p>
        <p className="font-bold">
          {" "}
          Rating: {`${product.rating.rate} (${product.rating.count})`}
        </p>
        <Link to={`/products/${product.id}`}>
          <button className="py-1 mt-2 px-3 text-slate-600  border-2 bg-white rounded hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in">
            Buy Now
          </button>
        </Link>
      </div>
    </Card>
  );
}
