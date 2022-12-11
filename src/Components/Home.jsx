import React from "react";
import heroImg from "../assets/atikh-bana-_KaMTEmJnxY-unsplash.jpg";
const myStyle = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),url(${heroImg}`,
  height: "80vh",
  marginTop: "",
  BackgroundColor: "rgba(0,0,0,0.1)",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export default function Home() {
  return (
    <div
      style={myStyle}
      className="bg-gradient-to-br from-cyan-500 to-blue-500 "
    >
      <div className="px-20 w-full pt-48 mx-auto  text-white ">
        <h1 className="text-6xl font-bold uppercase ">New Season Arrival</h1>
        <p className="uppercase font-light text-4xl">
          Check Out all the trends
        </p>
      </div>
    </div>
  );
}
