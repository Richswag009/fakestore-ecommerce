import React from "react";
import heroImg from "../../assets/dami.png";

export default function Header() {
  return (
    <div className=" lg:h-[90vh]   bg-[#549dcd13] px-20 flex flex-col lg:flex-row items-center  justify-between py-20 space-x-10 ">
      <div className=" w-full mx-auto  text-black ">
        <h1 className=" text-2xl lg:text-6xl font-bold uppercase ">
          New Season Arrival
        </h1>
        <p className="uppercase font-light text-2xl lg:text-4xl">
          Check Out all the trends
        </p>

        <p className=" uppercase font-semibold  text-xl lg:text-4xl py-10">
          Grap up to 50% Off On Selected clothings{" "}
        </p>
      </div>
      <img
        src={heroImg}
        alt=""
        className="w-full h-full outline-none  rounded-md"
      />
    </div>
  );
}
