import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <div>
      <Link to={"/results?search_query=" + name}>
        <button className="px-4 py-1 m-3 bg-gray-200 rounded-lg">{name}</button>
      </Link>
    </div>
  );
};

export default Button;
