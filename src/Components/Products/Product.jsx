import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Product({
  loading,
  setFilter,
  setData,
  filterProduct,
  data,
  filter,
}) {
  return (
    <section className="">
      <div className="text-center my-10 text-xl">
        <h1 className="py-3 text-3xl">Latest Products</h1>
        <hr />
      </div>
      <div className=" grid grid-cols-2 lg:flex   lg:justify-center  space-x-2 px-10">
        <button
          onClick={() => setFilter(data)}
          className=" my-2 hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          All
        </button>
        <button
          onClick={() => filterProduct("men's clothing")}
          className=" my-2 hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in  px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Men's Clothing
        </button>
        <button
          onClick={() => filterProduct("electronics")}
          className=" my-2  text-sm hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Electronics
        </button>
        <button
          onClick={() => filterProduct("women's clothing")}
          className=" my-2 hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in  px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Women's Clothing
        </button>
        <button
          onClick={() => filterProduct("jewelery")}
          className=" my-2 hover:bg-slate-800 delay-300 hover:text-white duration-150 ease-in  px-5 py-1 shadow bg-white mr-3 text-slate-500 outline-black rounded border"
        >
          Jewellerys
        </button>
      </div>

      {loading ? (
        <>
          <div className="grid grid-cols-4 gap-4 mx-20">
            <div>
              <Skeleton count={5} height={350} />
            </div>
            <div>
              <Skeleton count={5} height={350} />
            </div>
            <div>
              <Skeleton count={5} height={350} />
            </div>
            <div>
              <Skeleton count={5} height={350} />
            </div>
          </div>
        </>
      ) : (
        // <ProductItem />
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-center">
          {filter.map((product) => {

            return (
              <ProductItem
                key={product.id}
                product={product}
                loading={loading}
                // data={data}
              />
            );
          })}

       
        </div>
      )}
    </section>
  );
}
