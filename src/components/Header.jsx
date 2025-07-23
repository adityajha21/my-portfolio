
import React from "react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow">
      {/* Left: Logo and Name */}
      <div className="flex items-center space-x-4">
        <div className="text-3xl font-extrabold text-black">≡</div>
        <div>
          <h1 className="text-xl font-bold italic leading-tight">Aditya Jha</h1>
          <p className="text-xs text-gray-500">engineer | photographer | blogger</p>
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium uppercase">
        <a href="#home" className="text-gray-400 italic">Home</a>
        <a href="#photography" className="hover:text-black">Photography</a>
        <a href="#blog" className="hover:text-black">Blog</a>
        <a href="#downloads" className="hover:text-black">Downloads</a>
        <a href="#store" className="hover:text-black">Store</a>
        <a href="#about" className="hover:text-black">About</a>
      </nav>

      {/* Right: Social Icons */}
      <div className="flex items-center space-x-4 text-xl">
        <a href="https://www.youtube.com/@adityajha8753" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-600" />
        </a>
        <a href="https://www.instagram.com/adi_b2/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-nath-jha-a4581b18/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="bg-black text-white rounded-full p-1" />
        </a>
      </div>
    </header>
  );
};
