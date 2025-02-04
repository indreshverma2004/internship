import React, { useState } from "react"; 
import { motion, useScroll } from "framer-motion"; 
import { Link } from "react-router-dom"; 
import topImage from "../assets/or1.png"; 
import bottomImage from "../assets/or2.png"; 
import newBottomImage from "../assets/or3.png"; 
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
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-3xl font-bold">BOTOL</h1>
        <div className="space-x-6">
          <Link to="/sale" className="text-gray-400 hover:text-black">Shop</Link>
          <Link to="/about" className="text-gray-400 hover:text-black">Contact us</Link>
          <Link to="/about" className="text-gray-400 hover:text-black">About</Link>
          <Link to="/about" className="text-gray-400 hover:text-black">Journal</Link>
          <Link to="/about" className="text-gray-400 hover:text-black">Custom</Link>
          <Link to="/sale" className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition">
            Sale
          </Link>
          <button 
            onClick={toggleDarkMode} 
            className={`bg-${isDarkMode ? 'yellow-500' : 'gray-500'} text-blue font-semibold px-4 py-2 rounded-md hover:bg-${isDarkMode ? 'yellow-400' : 'gray-400'}`}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">
            Inquiry Now
          </button>
        </div>
      </nav>

      <div className="absolute top-[13%] left-20 w-40">
        <img src={leftImage} alt="Left" className="w-full h-auto" />
      </div>
      <div className="absolute top-[13%] right-20 w-40">
        <img src={rightImage} alt="Right" className="w-full h-auto" />
      </div>

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

      <div className="flex flex-col items-center justify-center text-center mt-[5%]">
        <motion.div 
          className="relative w-96 h-96 border-2 border-blue-300 rounded-full flex flex-col items-center justify-center p-5"
          initial={{ scale: 0, backgroundColor: "#ffffff", opacity: 0 }}
          animate={{ scale: 0.9, backgroundColor: "#ffffff", opacity: 1 }} 
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        >
          <h1 className="text-3xl font-bold leading-tight text-black">
            The Ultimate Companion for Hydration
          </h1>
          <p className="mt-3 text-black">
            We believe in the power of hydration. <br /> Our mission is simple yet vital.
          </p>
        </motion.div>

        {!showNewImage && (
          <motion.img 
            src={topImage} 
            alt="Top Bottle" 
            className="absolute w-24"
            initial={{ y: -500, opacity: 1 }} 
            animate={{ y: [-330, -600, 50], opacity: [0.9, 1, 1] }} 
            transition={{ duration: 5, delay: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }} 
          />
        )}

        {!showNewImage ? (
          <motion.img 
            src={bottomImage} 
            alt="Bottom Bottle" 
            className="mt-10 w-40"
            initial={{ y: -200, opacity: 1 }}
            animate={{ y: 180, opacity: 1 }}
            transition={{ duration: 5, delay: 1.5, ease: "easeOut" }}
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

      <div className="mt-[23%] text-center">
        <h3 className="text-4xl font-bold">Hydration Essentials</h3>
      </div>

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

      <div className="mt-20 w-full">
        <img src={fullWidthImage} alt="Full Width Image" className="w-full h-auto object-cover" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
