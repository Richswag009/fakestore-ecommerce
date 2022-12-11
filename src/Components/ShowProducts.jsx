import React from "react";
import Product from "./Product";
export default function ShowProducts({
  data,
  filterProduct,
  filter,
  setFilter,
}) {
  return (
    <div>
      <div className=" flex justify-center">
        <button
          onClick={() => setFilter(data)}
          className=" hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          All
        </button>
        <button
          onClick={() => filterProduct("men's clothing")}
          className=" hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in  px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Men's Clothing
        </button>
        <button
          onClick={() => filterProduct("women's clothing")}
          className=" hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in  px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Women's Clothing
        </button>
        <button
          onClick={() => filterProduct("jewelery")}
          className=" hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in  px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Jewellerys
        </button>
        <button
          onClick={() => filterProduct("electronics")}
          className="  hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Electronics
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4  my-20 w-full">
        {filter.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
