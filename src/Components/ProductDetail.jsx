import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
      setProduct(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="grid grid-cols-2 gap-4 mt-20">
          <div>
            <Skeleton height={400} />
          </div>
          <div>
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
          </div>
        </div>
      </>
    );
  };
  const ProductDescription = () => {
    return (
      <div className="w-[90%]  items-center gap-6 justify-center mt-12 m-auto grid grid-cols-2">
        <img src={product.image} alt={product.title} className=" h-[400px]" />
        <div className="mb-20">
          <h4 className="uppercase text-lg text-black">{product.category}</h4>
          <h1 className="text-4xl ">{product.title}</h1>
          <p className="font-bold">
            Rating:
            {product.rating && product.rating.rate}
            <i class="fas fa-star    "></i>
          </p>
          <h3 className="my-4 text-xl font-bold">${product.price}</h3>
          <p>{product.description}</p>
          <div className="flex ">
            <button className="px-3 py-1 mr-3 outline  bg-slate-900 text-white  duration-300 delay-150 transition rounded my-2 ease-in">
              Add to Cart
            </button>
            <NavLink to="/cart">
              <button className="px-3 py-1  border hover:outline hover:outline-slate-900 hover:bg-slate-700 hover:text-white text-slate-700 duration-300 delay-150 transition rounded my-2 ease-in">
                Go to Cart
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container px-32">
        {loading ? <Loading /> : <ProductDescription />}
      </div>
    </div>
  );
}
