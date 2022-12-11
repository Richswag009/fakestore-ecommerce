import React, { useState, useEffect } from "react";
import ShowProducts from "./ShowProducts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

export default function Products() {
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
    <section className="container px-32">
      <div className="text-center my-10 text-3xl">
        <h1 className="py-3">Latest Products</h1>
        <hr />
      </div>

      {loading ? (
        <>
          <div className="grid grid-cols-4 gap-4">
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
        <ShowProducts
          data={data}
          filterProduct={filterProduct}
          filter={filter}
          setFilter={setFilter}
        />
      )}
    </section>
  );
}
