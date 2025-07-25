import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "../src/components/Hero";
import { About } from "../src/components/About";
import { Blogs } from "../src/components/Blogs";
import { Contact } from "../src/components/Contact";
import { Header } from "../src/components/Header";
import { BlogDetail } from "../src/components/BlogDetail";
import { Layout } from "../src/components/Layout";

function App() {
   return (
    <Router>
      <Routes>
        {/* Wrap all pages in Layout so Header stays */}
        <Route element={<Layout />}>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Blogs />
                <Contact />
              </>
            }
          />
          {/* Blog detail page */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;