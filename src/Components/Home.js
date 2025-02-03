import React from "react";
import { motion } from "framer-motion";  // Import Framer Motion
import topImage from "../assets/originalcap.png";  
import bottomImage from "../assets/bottle down.png";
import leftImage from "../assets/newbottle.png";
import rightImage from "../assets/newbottle.png";
import newLeftImage from "../assets/hand bottle.png";  // Placeholder for new left image
import newRightImage from "../assets/written.png";  // Placeholder for new right image

function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-3xl font-bold">BOTOL</h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Shop</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact us</a>
          <a href="#" className="text-gray-600 hover:text-black">About</a>
          <a href="#" className="text-gray-600 hover:text-black">Journal</a>
          <a href="#" className="text-gray-600 hover:text-black">Custom</a>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">
            Inquiry Now
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        {/* Large Circle */}
        <div className="relative w-96 h-96 border-2 border-blue-300 rounded-full flex flex-col items-center justify-center p-5">
          {/* Animated Top Image */}
          <motion.img 
            src={topImage} 
            alt="Top Bottle" 
            className="absolute w-24"
            initial={{ y: -100, opacity: 0 }}   // Start above
            animate={{ y: 250, opacity: 1 }}    // Move down into place
            transition={{ duration: 1.5, ease: "easeOut" }}  // Smooth animation
          />

          <h2 className="text-3xl font-bold leading-tight">
            The Ultimate Companion for Hydration
          </h2>
          
          <p className="text-gray-600 mt-3">
            We believe in the power of hydration. <br />
            Our mission is simple yet vital.
          </p>
        </div>

        {/* Inquiry Button */}
        <button className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Inquiry Now
        </button>

        {/* Bottom Image */}
        <img src={bottomImage} alt="Bottom Bottle" className="mt-10 w-40" />
      </div>

      {/* Floating Side Images (moved above the new images) */}
      <div className="absolute top-1/4 left-10 w-20">
        <img src={leftImage} alt="Left" className="w-full h-auto" />
      </div>
      <div className="absolute top-1/4 right-10 w-20">
        <img src={rightImage} alt="Right" className="w-full h-auto" />
      </div>

      {/* Two New Images Below */}
      <div className="flex justify-between mt-20 px-10">
        {/* First New Image covering 50% of screen width */}
        <div className="w-1/2">
          <img 
            src={newLeftImage} 
            alt="New Left" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Second New Image covering 50% of screen width */}
        <div className="w-1/2">
          <img 
            src={newRightImage} 
            alt="New Right" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
