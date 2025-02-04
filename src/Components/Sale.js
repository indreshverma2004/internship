import React from "react";
import image1 from "../assets/bluebottle.png";
import image2 from "../assets/black bottle.png";
import image3 from "../assets/newbottle2.png";

const saleItems = [
  { id: 1, name: "Aqua Flask", price: "$19.99", img: image1, stock: 3 },
  { id: 2, name: "Hydro Elite", price: "$24.99", img: image2, stock: 6 },
  { id: 3, name: "PureFlow Bottle", price: "$29.99", img: image3, stock: 4 },
];

function Sale() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">🔥 Sale Items 🔥</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {saleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-lg text-gray-600 mt-2">{item.price}</p>
              
              {/* Stock Left in Red */}
              <p className="text-red-500 font-bold mt-1">{item.stock} left in stock</p>

              {/* Bought Last Month */}
              <p className="text-green-600 font-semibold mt-1">3K bought last month</p>

              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sale;
