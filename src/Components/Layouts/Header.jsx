import React from "react";
import heroImg from "../../assets/dami.png";

export default function Header() {
  return (
    <div className=" bg-[#549dcd13] px-10 flex flex-col lg:flex-row items-center justify-between py-10 lg:py-20 lg:space-x-10 ">
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
        className="h-1/2 lg:w-full lg:h-full outline-none  rounded-md"
      />
    </div>
  );
}
