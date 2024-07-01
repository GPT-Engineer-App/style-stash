import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <p className="text-lg mb-8">Browse our collection of stylish clothing</p>
      <Link to="/" className="text-blue-500 underline mb-4">
        Back to Home
      </Link>
      <Link to="/product/1" className="text-blue-500 underline">
        View Product Details
      </Link>
    </div>
  );
};

export default Products;