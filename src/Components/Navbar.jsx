import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed w-full z-50 px-8 md:px-16 lg:px-24 shadow-md">
      <div className="container mx-auto py-4 flex items-center justify-between">

        {/* Logo with Dancing Animation */}
        <div className="text-3xl font-bold animate-dance cursor-pointer">
          Deepak Texttile
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/more" className="hover:text-gray-400">More</Link>
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          <Link to="/shop" className="hover:text-gray-400">Shop</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Contact Button */}
        <Link to="/contact">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            More Information
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
