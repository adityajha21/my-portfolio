import React from "react";
import { Hero } from "../src/components/Hero";
import { About } from "../src/components/About";
import { Projects } from "../src/components/Projects";
import { Contact } from "../src/components/Contact";
import { Header } from "../src/components/Header";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;