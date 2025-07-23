import React from "react";

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Aditya Jha</h1>
      <p className="text-lg md:text-2xl mb-6 max-w-xl">
        A Software Engineer passionate about Java, Spring Boot, and AI.
      </p>
      <a href="#projects" className="bg-white text-indigo-600 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition">
        View My Work
      </a>
    </section>
  );
};