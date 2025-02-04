import React, { useState } from "react"; 
import { motion, useScroll } from "framer-motion"; 
import topImage from "../assets/cap2.png"; 
import bottomImage from "../assets/down2.png"; 
import newBottomImage from "../assets/full bottle.png"; // Replace with your new image 
import leftImage from "../assets/newbottle.png"; 
import rightImage from "../assets/newbottle.png"; 
import newLeftImage from "../assets/hand bottle.png"; 
import newRightImage from "../assets/written.png"; 
import image1 from "../assets/bluebottle.png"; 
import image2 from "../assets/black bottle.png"; 
import image3 from "../assets/newbottle2.png"; 
import fullWidthImage from "../assets/background.png"; 
import Footer from "./Footer";

function Home() {
  const { scrollYProgress } = useScroll();
  const [showNewImage, setShowNewImage] = useState(false);

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

      {/* Floating Side Images */}
      <div className="absolute top-[13%] left-20 w-40">
        <img src={leftImage} alt="Left" className="w-full h-auto" />
      </div>
      <div className="absolute top-[13%] right-20 w-40">
        <img src={rightImage} alt="Right" className="w-full h-auto" />
      </div>

      {/* Two New Images Positioned Below Floating Images */}
      <div className="absolute top-[20%] left-10 w-1/2">
        <img src={newLeftImage} alt="New Left" className="w-full h-auto object-cover" />
      </div>
      <div className="absolute top-[20%] right-10 w-1/2">
        <motion.img 
          src={newRightImage} 
          alt="New Right" 
          className="w-full h-auto max-h-[600px] object-contain"
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center mt-[5%]">
        {/* Large Circle */}
        <motion.div 
  className="relative w-96 h-96 border-2 border-blue-300 rounded-full flex flex-col items-center justify-center p-5"
  initial={{ scale: 0, backgroundColor: "#ffffff", opacity: 0 }} // Start hidden
  animate={{ scale: 0.9, backgroundColor: "#ffffff", opacity: 1 }} // Expand to final size
  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }} // Wait 1s, then grow in 1.5s
>
  {/* Circle animation */}
{/* </motion.div> */}
          

          <h1 className="text-3xl font-bold leading-tight">
            The Ultimate Companion for Hydration
          </h1>
          <p className="text-gray-600 mt-3">
            We believe in the power of hydration. <br />
            Our mission is simple yet vital.
          </p>
        </motion.div>

        {/* Animated Top Image */}
        {!showNewImage && (
            <motion.img 
            src={topImage} 
            alt="Top Bottle" 
            className="absolute w-24"
            initial={{ y: -500, opacity: 1 }} // Start from initial position
            animate={{ y: [-330, -600, 50], opacity: [0.9, 1, 1] }} // Moves up first, then slides back down
            transition={{ duration: 5, delay: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }} // Smooth movement
          />
          
          
          )}

        {/* Bottom Image */}
        {!showNewImage ? (
          <motion.img 
            src={bottomImage} 
            alt="Bottom Bottle" 
            className="mt-10 w-40"
            initial={{ y: -200, opacity: 1 }}
            animate={{ y: 180, opacity: 1 }}
            transition={{ duration: 5,delay:1.5, ease: "easeOut" }}
            onAnimationComplete={() => setShowNewImage(true)}
          />
        ) : (
          <motion.img 
            src={newBottomImage} 
            alt="New Bottom Bottle" 
            className="mt-6 w-40 z-10" 
            style={{ transform: 'scale(0.7)', objectFit: 'contain' }} 
          />
        )}
      </div>

      {/* Hydration Essentials Section */}
      <div className="mt-[23%] text-center">
        <h3 className="text-4xl font-bold text-gray-800">Hydration Essentials</h3>
      </div>

      {/* Three Image Boxes */}
      <div className="flex justify-between mt-10 px-10">
        {[image1, image2, image3].map((img, index) => (
          <div key={index} className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
            <img src={img} alt="Bottle" className="w-full h-auto object-cover" />
            <p className="mt-2 text-xl font-semibold">New Bottle</p>
            <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Another set of Three Image Boxes */}
      <div className="flex justify-between mt-10 px-10">
        {[image2, image3, image1].map((img, index) => (
          <div key={index} className="w-1/3 p-4 border-2 border-gray-200 rounded-lg text-center">
            <img src={img} alt="Bottle" className="w-full h-auto object-cover" />
            <p className="mt-2 text-xl font-semibold">New Bottle</p>
            <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Full-width Image */}
      <div className="mt-20 w-full">
        <img src={fullWidthImage} alt="Full Width Image" className="w-full h-auto object-cover" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
