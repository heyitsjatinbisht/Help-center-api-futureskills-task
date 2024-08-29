import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-2xl">Abstract | Help Center</h1>
      <Link
        to="/submit-request"
        className="bg-black-500 border-white border-2 px-4 py-2 rounded-md"
      >
        Submit a Request
      </Link>
    </div>
  );
};

export default Header;
