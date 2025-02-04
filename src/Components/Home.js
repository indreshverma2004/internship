import React from "react";
import { motion, useScroll } from "framer-motion";  // Import Framer Motion and useScroll
import topImage from "../assets/originalcap.png";  
import bottomImage from "../assets/bottle down.png";
import leftImage from "../assets/newbottle.png";
import rightImage from "../assets/newbottle.png";
import newLeftImage from "../assets/hand bottle.png";  
import newRightImage from "../assets/written.png"; 
import image1 from "../assets/bluebottle.png";
import image2 from "../assets/black bottle.png"; 
import image3 from "../assets/newbottle2.png";
import fullWidthImage from "../assets/background.png";  // Add full-width image
import Footer from "./Footer";


function Home() {
  // Scroll hook to detect scroll position
  const { scrollYProgress } = useScroll();

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
        <motion.div 
          className="relative w-96 h-96 border-2 border-blue-300 rounded-full flex flex-col items-center justify-center p-5"
          initial={{ scale: 0.5, backgroundColor: "#ffffff" }}  // Initial size and color
          animate={{ scale: 0.90, backgroundColor: "#ffffff" }}  // Final size and color
          transition={{ duration: 2, ease: "easeInOut" }}  // Smooth animation
        >
          {/* Animated Top Image */}
          <motion.img 
            src={topImage} 
            alt="Top Bottle" 
            className="absolute w-24"
            initial={{ y: -100, opacity: 0 }}   // Start above
            animate={{ y: 1000, opacity: 1 }}    // Move down into place
            transition={{ duration: 1.5, ease: "easeOut" }}  // Smooth animation
          />

          <h2 className="text-3xl font-bold leading-tight">
            The Ultimate Companion for Hydration
          </h2>
          
          <p className="text-gray-600 mt-3">
            We believe in the power of hydration. <br />
            Our mission is simple yet vital.
          </p>
        </motion.div>

        {/* Bottom Image */}
        <motion.img 
          src={bottomImage} 
          alt="Bottom Bottle" 
          className="mt-10 w-40"
          initial={{ y: -100, opacity: 0 }}   // Start above
            animate={{ y: 700, opacity: 1 }}    // Move down into place
            transition={{ duration: 1.5, ease: "easeOut" }}  // Smooth animation
        //   style={{ opacity: scrollYProgress }}
        />
      </div>

      {/* Floating Side Images positioned lower but visible on load */}
<div className="absolute top-[13%] left-10 w-20">
  <img src={leftImage} alt="Left" className="w-full h-auto" />
</div>

<div className="absolute top-[13%] right-10 w-20">
  <img src={rightImage} alt="Right" className="w-full h-auto" />
</div>


      {/* Two New Images Below */}
      <div className="flex justify-between mt-20 px-10">
        <div className="w-1/2">
          <img 
            src={newLeftImage} 
            alt="New Left" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-1/2">
          <motion.img 
            src={newRightImage} 
            alt="New Right" 
            className="w-full h-auto object-cover"
            // style={{ opacity: scrollYProgress }}  
          />
        </div>
      </div>

      {/* Hydration Essentials */}
      <div className="mt-20 text-center">
        <h3 className="text-4xl font-bold text-gray-800">Hydration Essentials</h3>
      </div>

      {/* Three Boxes for Images */}
      <div className="flex justify-between mt-10 px-10">
        {/* Box 1 */}
        <div className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
          <img src={image1} alt="New Bottle 1" className="w-full h-auto object-cover" />
          <p className="mt-2 text-xl font-semibold">New Bottle</p>
          <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Box 2 */}
        <div className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
          <img src={image2} alt="New Bottle 2" className="w-full h-auto object-cover" />
          <p className="mt-2 text-xl font-semibold">New Bottle</p>
          <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Box 3 */}
        <div className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
          <img src={image3} alt="New Bottle 3" className="w-full h-auto object-cover" />
          <p className="mt-2 text-xl font-semibold">New Bottle</p>
          <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Another set of Three Boxes */}
      <div className="flex justify-between mt-10 px-10">
        {/* Box 4 */}
        <div className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
          <img src={image2} alt="New Bottle 4" className="w-full h-auto object-cover" />
          <p className="mt-2 text-xl font-semibold">New Bottle</p>
          <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Box 5 */}
        <div className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
          <img src={image3} alt="New Bottle 5" className="w-full h-auto object-cover" />
          <p className="mt-2 text-xl font-semibold">New Bottle</p>
          <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Box 6 */}
        <div className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
          <img src={image1} alt="New Bottle 6" className="w-full h-auto object-cover" />
          <p className="mt-2 text-xl font-semibold">New Bottle</p>
          <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Full-width Image */}
      <div className="mt-20 w-full">
        <img 
          src={fullWidthImage} 
          alt="Full Width Image" 
          className="w-full h-auto object-cover"
        />
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
