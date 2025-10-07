import React from "react";

// Import textile images
import silkImg from "../assets/textiles/textile1.jpg";
import cottonImg from "../assets/textiles/textile2.jpg";
import fabricImg from "../assets/textiles/textile3.jpg";
import woolImg from "../assets/textiles/textile4.jpg";
import designerImg from "../assets/textiles/textile5.jpg";
import linenImg from "../assets/textiles/textile6.jpg";
import polyesterImg from "../assets/textiles/textile7.jpg";
import denimImg from "../assets/textiles/textile8.jpg";
import khadiImg from "../assets/textiles/textile9.jpg";
import velvetImg from "../assets/textiles/textile10.jpg";

const textiles = [
  {
    name: "Silk",
    image: silkImg,
    details: [
      "Material: Pure silk",
      "Origin: India, China",
      "Texture: Smooth and shiny",
      "Care: Dry clean recommended",
      "Ideal Garments: Sarees, dresses, blouses",
      "Season: Year-round, especially festive",
      "Durability: Medium-high",
      "Eco-friendly: Natural fiber",
      "Color Variety: Multiple vibrant colors",
      "Weave Pattern: Twill, Charmeuse, Satin",
      "Price Range: ₹800-₹5000 per meter",
      "Specialty: Luxurious feel and luster",
      "Popular Use: Weddings and formal wear",
      "Weight: Lightweight to medium",
      "Certification: Silk Mark certified",
    ],
  },
  {
    name: "Cotton",
    image: cottonImg,
    details: [
      "Material: 100% cotton",
      "Origin: India, Egypt, USA",
      "Texture: Soft and breathable",
      "Care: Machine washable",
      "Ideal Garments: Shirts, dresses, bedsheets",
      "Season: All seasons",
      "Durability: High",
      "Eco-friendly: Natural fiber",
      "Color Variety: Wide range",
      "Weave Pattern: Plain, Twill, Poplin",
      "Price Range: ₹200-₹1500 per meter",
      "Specialty: Comfortable and breathable",
      "Popular Use: Everyday wear",
      "Weight: Lightweight to medium",
      "Certification: Organic cotton available",
    ],
  },
  {
    name: "Fabric",
    image: fabricImg,
    details: [
      "Material: Polyester, linen, blends",
      "Origin: Global",
      "Texture: Smooth to medium",
      "Care: Machine washable or hand wash",
      "Ideal Garments: Casual wear, home décor",
      "Season: All seasons",
      "Durability: High",
      "Eco-friendly: Varies by material",
      "Color Variety: Multiple options",
      "Weave Pattern: Variety of patterns",
      "Price Range: ₹300-₹2000 per meter",
      "Specialty: Multi-purpose textile",
      "Popular Use: Tailoring and crafting",
      "Weight: Lightweight to medium",
      "Certification: Varies by material",
    ],
  },
  {
    name: "Wool",
    image: woolImg,
    details: [
      "Material: Pure wool / blends",
      "Origin: Australia, India, New Zealand",
      "Texture: Soft to medium coarse",
      "Care: Dry clean recommended",
      "Ideal Garments: Sweaters, jackets, scarves",
      "Season: Winter",
      "Durability: High",
      "Eco-friendly: Biodegradable",
      "Color Variety: Natural and dyed shades",
      "Weave Pattern: Knit, Twill, Herringbone",
      "Price Range: ₹500-₹4000 per meter",
      "Specialty: Warmth and insulation",
      "Popular Use: Winter fashion",
      "Weight: Medium to heavy",
      "Certification: Woolmark certified",
    ],
  },
  {
    name: "Designer Wear",
    image: designerImg,
    details: [
      "Material: Silk, cotton blends, lace",
      "Origin: India, Italy",
      "Texture: Premium smooth or textured",
      "Care: Dry clean recommended",
      "Ideal Garments: Couture, party wear",
      "Season: Year-round",
      "Durability: Medium",
      "Eco-friendly: Depends on material",
      "Color Variety: Rich and vibrant",
      "Weave Pattern: Custom designer patterns",
      "Price Range: ₹1000-₹8000 per meter",
      "Specialty: Unique fashion designs",
      "Popular Use: Weddings, special occasions",
      "Weight: Lightweight to medium",
      "Certification: Designer label",
    ],
  },
  {
    name: "Linen",
    image: linenImg,
    details: [
      "Material: 100% linen",
      "Origin: Belgium, India",
      "Texture: Lightweight and breathable",
      "Care: Hand wash or machine wash",
      "Ideal Garments: Summer shirts, dresses",
      "Season: Summer",
      "Durability: Medium-high",
      "Eco-friendly: Natural fiber",
      "Color Variety: Pastel and neutral tones",
      "Weave Pattern: Plain, textured",
      "Price Range: ₹400-₹2500 per meter",
      "Specialty: Breathable and comfortable",
      "Popular Use: Casual and formal summer wear",
      "Weight: Lightweight",
      "Certification: Organic linen available",
    ],
  },
  {
    name: "Polyester",
    image: polyesterImg,
    details: [
      "Material: Synthetic polyester",
      "Origin: Global",
      "Texture: Smooth, wrinkle-resistant",
      "Care: Machine washable",
      "Ideal Garments: Dresses, shirts, uniforms",
      "Season: All seasons",
      "Durability: High",
      "Eco-friendly: Non-biodegradable",
      "Color Variety: Wide range",
      "Weave Pattern: Twill, satin, plain",
      "Price Range: ₹150-₹1200 per meter",
      "Specialty: Durable and low-maintenance",
      "Popular Use: Everyday and industrial use",
      "Weight: Lightweight to medium",
      "Certification: ISO quality certified",
    ],
  },
  {
    name: "Denim",
    image: denimImg,
    details: [
      "Material: Cotton denim",
      "Origin: USA, India",
      "Texture: Heavy and sturdy",
      "Care: Machine washable",
      "Ideal Garments: Jeans, jackets, skirts",
      "Season: All seasons",
      "Durability: Very high",
      "Eco-friendly: Varies",
      "Color Variety: Blue shades, black, grey",
      "Weave Pattern: Twill",
      "Price Range: ₹400-₹3000 per meter",
      "Specialty: Timeless casual fabric",
      "Popular Use: Casual wear, fashion",
      "Weight: Medium to heavy",
      "Certification: Organic cotton denim available",
    ],
  },
  {
    name: "Khadi",
    image: khadiImg,
    details: [
      "Material: Handspun cotton",
      "Origin: India",
      "Texture: Coarse to smooth",
      "Care: Gentle hand wash",
      "Ideal Garments: Ethnic wear, kurtas, sarees",
      "Season: All seasons",
      "Durability: High",
      "Eco-friendly: Sustainable and organic",
      "Color Variety: Natural shades, dyed colors",
      "Weave Pattern: Handloom patterns",
      "Price Range: ₹250-₹2000 per meter",
      "Specialty: Traditional craftsmanship",
      "Popular Use: Sustainable fashion",
      "Weight: Lightweight to medium",
      "Certification: Khadi India certified",
    ],
  },
  {
    name: "Velvet",
    image: velvetImg,
    details: [
      "Material: Cotton, silk, or synthetic velvet",
      "Origin: India, Europe",
      "Texture: Soft, plush, and luxurious",
      "Care: Dry clean recommended",
      "Ideal Garments: Party wear, upholstery",
      "Season: Winter or festive occasions",
      "Durability: Medium-high",
      "Eco-friendly: Varies",
      "Color Variety: Dark, rich shades",
      "Weave Pattern: Cut pile, crushed, embossed",
      "Price Range: ₹500-₹5000 per meter",
      "Specialty: Elegant, premium look",
      "Popular Use: Evening wear, special events",
      "Weight: Medium",
      "Certification: Premium textile standards",
    ],
  },
];

const About = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">About Us</h2>
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto">
        We are dedicated to providing a wide range of high-quality textiles for all your fashion and lifestyle needs. Our mission is to combine traditional craftsmanship with modern designs to deliver exceptional products to our customers.
      </p>

      <h3 className="text-3xl font-semibold mb-4 text-gray-800 text-center">Our Textiles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {textiles.map((textile, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={textile.image}
              alt={textile.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h4 className="text-2xl font-semibold mb-2">{textile.name}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {textile.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
