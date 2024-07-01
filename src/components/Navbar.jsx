import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Clothing Store
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;