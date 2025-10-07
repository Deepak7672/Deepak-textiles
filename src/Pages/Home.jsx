import React from "react";
import { Link } from "react-router-dom";

// Import images
import textile1 from "../assets/textiles/textile1.jpg";
import textile2 from "../assets/textiles/textile2.jpg";
import textile3 from "../assets/textiles/textile3.jpg";
import textile4 from "../assets/textiles/textile4.jpg";
import textile5 from "../assets/textiles/textile5.jpg";
import textile6 from "../assets/textiles/textile6.jpg";
import textile7 from "../assets/textiles/textile7.jpg";
import textile8 from "../assets/textiles/textile8.jpg";
import textile9 from "../assets/textiles/textile9.jpg";
import textile10 from "../assets/textiles/textile10.jpg";

const Home = () => {
  const textileImages = [
    textile1, textile2, textile3, textile4, textile5,
    textile6, textile7, textile8, textile9, textile10
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 animate-pulse">
        Welcome to Our Textile World
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our amazing textile products! Hover on images to zoom in.
      </p>

      {/* Call-to-Action Button */}
      <Link
        to="/contact"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-12"
      >
        Get Started
      </Link>

      {/* Grid of Textile Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {textileImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={img}
              alt={`Textile ${idx + 1}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
