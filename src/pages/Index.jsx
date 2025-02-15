import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Clothing Store</h1>
      <p className="text-lg mb-8">Discover the latest trends in fashion</p>
      <Link to="/products" className="text-blue-500 underline">
        Shop Now
      </Link>
    </div>
  );
};

export default Index;