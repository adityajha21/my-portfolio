import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

export const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold mb-4">Blog not found</h2>
        <Link to="/" className="text-indigo-600">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div
        className="prose text-gray-700"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <div className="mt-6">
        <Link to="/" className="text-indigo-600">← Back to Blogs</Link>
      </div>
    </div>
  );
};
