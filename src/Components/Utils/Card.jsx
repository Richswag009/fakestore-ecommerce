import React from "react";

const Card = (props) => {
  return (
    <div className=" shadow-sm w-full transition ease-in-out rounded-md delay-150 duration-300 hover:border-2 hover:border-slate-800 shadow-slate-700 h-[full] md:h-[420px] my-6 ">
      {props.children}
    </div>
  );
};

export default Card;
