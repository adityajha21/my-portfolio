import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

export const Blogs = () => {
  return (
    <section id="blogs" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm mb-4">{blog.description}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-indigo-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};