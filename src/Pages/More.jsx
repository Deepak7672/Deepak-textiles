import React from "react";

const More = () => {
  return (
    <div className="p-8 text-center bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">More Information</h2>
      <p className="text-gray-600 mb-8">
        Stay updated with the latest offers, news, and announcements from our team.
      </p>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        {/* Social Impact */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            🌍 Social Impact
          </h3>
          <p className="text-gray-600">
            We are committed to sustainable textile production, empowering local artisans,
            and promoting eco-friendly fabrics to reduce our carbon footprint.
          </p>
        </div>

        {/* Associate Entities */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">
            🤝 Associate Entities
          </h3>
          <p className="text-gray-600">
            We collaborate with trusted suppliers, fashion brands, and global textile
            networks to ensure quality and innovation across all products.
          </p>
        </div>

        {/* Investors */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-purple-600">
            💼 Investors
          </h3>
          <p className="text-gray-600">
            Our investors play a key role in scaling our vision for global textile
            excellence. We provide transparent growth opportunities and sustainable ROI.
          </p>
        </div>

        {/* Careers */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-orange-600">
            🚀 Careers
          </h3>
          <p className="text-gray-600">
            Join our passionate team of designers, engineers, and innovators. Explore
            career opportunities and be part of our growing family.
          </p>
          <button className="mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
            View Openings
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Must be default export
export default More;
