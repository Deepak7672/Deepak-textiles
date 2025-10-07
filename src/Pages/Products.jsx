import React from "react";

const Products = () => {
  const categories = [
    {
      name: "Silk",
      price: "₹1200 - ₹5000 per meter",
      description: "Luxurious silk with a smooth texture, perfect for sarees, dresses, and premium clothing.",
      material: "Pure silk",
      origin: "India, China",
      care: "Dry clean recommended",
      colors: "Red, Blue, Green, Gold, Pink"
    },
    {
      name: "Cotton",
      price: "₹200 - ₹1500 per meter",
      description: "Soft and breathable cotton suitable for everyday wear. Available in vibrant colors and prints.",
      material: "100% cotton",
      origin: "India, Egypt, USA",
      care: "Machine washable",
      colors: "White, Black, Blue, Yellow, Multicolor"
    },
    {
      name: "Wool",
      price: "₹500 - ₹4000 per meter",
      description: "Warm wool textiles ideal for winter clothing. Perfect for jackets, sweaters, and scarves.",
      material: "Pure wool / blends",
      origin: "Australia, India, New Zealand",
      care: "Dry clean recommended",
      colors: "Grey, Brown, Navy, Maroon, Cream"
    },
    {
      name: "Denim",
      price: "₹400 - ₹3000 per meter",
      description: "Classic denim suitable for jeans, jackets, and casual wear collections.",
      material: "Cotton denim",
      origin: "USA, India",
      care: "Machine washable",
      colors: "Blue, Black, Grey, White"
    },
    {
      name: "Velvet",
      price: "₹500 - ₹5000 per meter",
      description: "Soft velvet fabric with a premium royal look, perfect for party wear.",
      material: "Cotton, silk, or synthetic velvet",
      origin: "India, Europe",
      care: "Dry clean recommended",
      colors: "Red, Purple, Black, Navy, Green"
    },
    {
      name: "Linen",
      price: "₹400 - ₹2500 per meter",
      description: "Lightweight and breathable linen fabric, perfect for summer outfits.",
      material: "100% linen",
      origin: "India, Belgium",
      care: "Hand wash or machine wash",
      colors: "Beige, White, Pastel Blue, Pastel Green"
    },
    {
      name: "Polyester",
      price: "₹150 - ₹1200 per meter",
      description: "Durable and wrinkle-free polyester, ideal for casual wear and uniforms.",
      material: "Synthetic polyester",
      origin: "Global",
      care: "Machine washable",
      colors: "Red, Blue, Black, White, Grey"
    },
    {
      name: "Khadi",
      price: "₹250 - ₹2000 per meter",
      description: "Traditional handspun khadi, eco-friendly and comfortable.",
      material: "Handspun cotton",
      origin: "India",
      care: "Gentle hand wash",
      colors: "Natural, White, Beige, Brown"
    },
    {
      name: "Designer Wear",
      price: "₹1000 - ₹8000 per meter",
      description: "Trendy designer textiles crafted for unique fashion and modern styles.",
      material: "Silk, cotton blends, lace",
      origin: "India, Italy",
      care: "Dry clean recommended",
      colors: "Red, Gold, Black, Blue, Green"
    },
    {
      name: "Fabric Blends",
      price: "₹300 - ₹2000 per meter",
      description: "High-quality blends including polyester, cotton, and linen for multi-purpose use.",
      material: "Blends",
      origin: "Global",
      care: "Machine washable or hand wash",
      colors: "White, Black, Grey, Multicolor"
    },
    {
      name: "Georgette",
      price: "₹400 - ₹3000 per meter",
      description: "Lightweight and sheer fabric, perfect for sarees and dresses.",
      material: "Polyester or silk",
      origin: "India, China",
      care: "Hand wash or dry clean",
      colors: "Red, Pink, Blue, Green, Yellow"
    },
    {
      name: "Chiffon",
      price: "₹500 - ₹3500 per meter",
      description: "Soft, lightweight, and flowing fabric, ideal for party and evening wear.",
      material: "Silk or synthetic",
      origin: "India, China",
      care: "Dry clean recommended",
      colors: "Peach, Blue, Purple, Pink, White"
    },
    {
      name: "Organza",
      price: "₹600 - ₹4000 per meter",
      description: "Sheer, stiff fabric used for evening gowns and overlays.",
      material: "Silk or synthetic",
      origin: "India, Europe",
      care: "Dry clean recommended",
      colors: "White, Gold, Pink, Blue, Silver"
    },
    {
      name: "Brocade",
      price: "₹800 - ₹6000 per meter",
      description: "Richly decorative shuttle-woven fabric, ideal for weddings and formal wear.",
      material: "Silk or silk blends",
      origin: "India",
      care: "Dry clean recommended",
      colors: "Red, Gold, Blue, Green, Black"
    },
    {
      name: "Taffeta",
      price: "₹700 - ₹5000 per meter",
      description: "Crisp, smooth fabric suitable for dresses and gowns.",
      material: "Silk or polyester",
      origin: "Europe, India",
      care: "Dry clean recommended",
      colors: "Blue, Silver, Pink, White"
    },
    {
      name: "Crepe",
      price: "₹400 - ₹3000 per meter",
      description: "Lightweight, crinkled texture, used for sarees, dresses, and tops.",
      material: "Silk or polyester",
      origin: "India, China",
      care: "Hand wash or dry clean",
      colors: "Red, Green, Blue, Black"
    },
    {
      name: "Satin",
      price: "₹500 - ₹4000 per meter",
      description: "Smooth, glossy fabric ideal for evening wear and lingerie.",
      material: "Silk or polyester",
      origin: "India, China",
      care: "Dry clean recommended",
      colors: "Red, Black, White, Blue"
    },
    {
      name: "Velour",
      price: "₹600 - ₹4500 per meter",
      description: "Soft, plush textile similar to velvet, perfect for casual luxury wear.",
      material: "Cotton or synthetic",
      origin: "India, Europe",
      care: "Machine washable or dry clean",
      colors: "Maroon, Blue, Green, Black"
    },
    {
      name: "Jacquard",
      price: "₹700 - ₹5000 per meter",
      description: "Intricately woven fabric with patterns, used for formal wear and upholstery.",
      material: "Silk, cotton, or blends",
      origin: "India, Europe",
      care: "Dry clean recommended",
      colors: "Gold, Silver, Red, Blue"
    },
    {
      name: "Canvas",
      price: "₹250 - ₹2000 per meter",
      description: "Heavy-duty, plain-woven fabric, used for bags, shoes, and upholstery.",
      material: "Cotton or cotton blend",
      origin: "India, USA",
      care: "Machine washable",
      colors: "Beige, Brown, White, Grey"
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Our Products</h2>
      <p className="text-gray-600 mb-8 text-center">
        Explore our wide range of high-quality textiles with detailed information including price, material, origin, care instructions, and available colors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{cat.name}</h3>
            <p className="text-gray-800 font-bold mb-2">{cat.price}</p>
            <p className="text-gray-600 mb-2">{cat.description}</p>
            <p className="text-gray-600"><strong>Material:</strong> {cat.material}</p>
            <p className="text-gray-600"><strong>Origin:</strong> {cat.origin}</p>
            <p className="text-gray-600"><strong>Care:</strong> {cat.care}</p>
            <p className="text-gray-600"><strong>Colors Available:</strong> {cat.colors}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
