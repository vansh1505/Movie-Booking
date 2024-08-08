import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="w-80 pb-4 border shadow-xl rounded-xl flex flex-col justify-between h-full">
        <div>
          <div className="rounded-t-xl overflow-hidden">
            <img src={props.img} alt="poster" />
          </div>
          <p className="m-3 text-2xl font-semibold text-gray-800">{props.title}</p>
          <p className="mx-2 mb-4 text-gray-700">{props.desc}</p>
        </div>
          <span className="mt-auto mx-3 mb-2 text-blue-700">
            <Link to="/booking">Book now</Link>
          </span>
      </div>
    </>
  );
};

export default Card;
