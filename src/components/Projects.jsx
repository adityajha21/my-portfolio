import React from "react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Push Notification API</h3>
            <p className="text-sm">A Java 8 and Spring Boot-based API to send push notifications using FCM. Includes strategy pattern and retry logic.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">JSON Comparator Tool</h3>
            <p className="text-sm">A Java tool to compare JSONs and generate HTML reports. Useful for API test automation and result analysis.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Smart Bano AI Se (YouTube)</h3>
            <p className="text-sm">An AI-based educational Shorts channel for Indian audiences, focused on simplifying emerging tech.</p>
          </div>
        </div>
      </div>
    </section>
  );
};