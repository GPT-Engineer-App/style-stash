import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Product Details</h1>
      <p className="text-lg mb-8">Detailed information about the product</p>
      <Link to="/products" className="text-blue-500 underline">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;