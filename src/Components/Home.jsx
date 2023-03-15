import React, { useState, useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Product from "./Products/Product";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import Header from "./Layouts/Header";

export default function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, Setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      Setloading(true);
      const response = await axios.get(`https://fakestoreapi.com/products`);
      if (componentMounted) {
        setData(response.data);
        console.log(response.data);
        setFilter(response.data);
        Setloading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <div className=" ">
      <Navbar />
      <Header />

      {loading ? (
        <>
          <div className=" mx-20 my-10 grid grid-cols1 lg:grid-cols-4 gap-4">
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
        <div className=" px-10 lg:px-20">
          <Product
            filterProduct={filterProduct}
            filter={filter}
            data={data}
            setFilter={setFilter}
            setData={setData}
          />
        </div>
      )}
    </div>
  );
}
