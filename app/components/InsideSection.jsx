"use client";
import React, { useState } from "react";

const InsideSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/image1.png",
      title: "Empowering Communities Through Education",
      date: "June 2025",
      description:
        "We are dedicated to creating educational opportunities that empower youth to shape a brighter future.",
    },
    {
      id: 2,
      image: "/image2.png",
      title: "Providing Food Aid Across Regions",
      date: "July 2025",
      description:
        "Our team ensures timely delivery of food packs to vulnerable families across different regions.",
    },
    {
      id: 3,
      image: "/image3.png",
      title: "Sustainable Water Projects Initiative",
      date: "August 2025",
      description:
        "We focus on providing clean and accessible water to rural communities, ensuring long-term sustainability.",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-start gap-6 mb-12">
          <div className="flex-1 min-w-[250px]">
            <h5 className="text-[#E40D11] font-semibold uppercase mb-2 tracking-wider ml-4 border-b-2 border-[#BC153F] inline-block pb-1">
              Insights & Updates
            </h5>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 ml-4">
              Stay Informed, Stay Inspired
            </h2>
          </div>

          <p className="flex-1 text-gray-600 max-w-sm text-sm font-semibold text-left">
            Explore stories, articles, and updates from our community. Learn more
            about our causes, discover impact highlights, and get inspired by the
            voices of change.
          </p>
        </div>

        {/* Blog Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Blog List */}
          <div className="flex flex-col gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                  selectedBlog.id === blog.id
                    ? "border-[#E40D11] shadow-lg shadow-red-200"
                    : "border-gray-200 hover:shadow-md"
                }`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold text-[#727479] mb-1">
                    <span className="text-black font-semibold">Blog •</span> Date:{" "}
                    {blog.date}
                  </p>
                  <h4 className="text-[16px] font-semibold text-gray-800">
                    {blog.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full">
            <img
              src={selectedBlog.image}
              alt="Selected Blog"
              className="w-full h-[300px] md:h-[450px] rounded-xl object-cover transition-all duration-500"
            />
          </div>

          {/* Right Blog Details */}
          <div className="text-left">
            <span className="text-[10px] uppercase font-semibold bg-gray-300 px-3 py-2 rounded text-black inline-block mb-2">
              Blog
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {selectedBlog.title}
            </h3>
            <p className="text-gray-700 mb-4 text-[15px] leading-relaxed font-[Tahoma]">
              {selectedBlog.description}
            </p>
            <p className="text-sm text-gray-500 font-semibold">
              Date: {selectedBlog.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideSection;
