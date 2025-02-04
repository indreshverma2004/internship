import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-20">
      <div className="container mx-auto px-10 text-center">
        <h1 className="text-3xl font-bold mb-4">BOTOL</h1>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>

        <div className="flex justify-center space-x-8 mb-4 text-gray-400">
          <a href="#" className="hover:text-white">Shop</a>
          <a href="#" className="hover:text-white">Contact us</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Journal</a>
          <a href="#" className="hover:text-white">Custom</a>
        </div>

        <div className="flex justify-center space-x-8 text-gray-400">
          <a href="#" className="hover:text-white">FAQ’s</a>
          <a href="#" className="hover:text-white">Returns</a>
          <a href="#" className="hover:text-white">Ordering</a>
          <a href="#" className="hover:text-white">Shipping</a>
          <a href="#" className="hover:text-white">Personalization</a>
          <a href="#" className="hover:text-white">Policies</a>
        </div>

        <div className="mt-6 text-gray-500 text-sm">
          Copyright © 2023 BOTOL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
