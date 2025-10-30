"use client";
import React from "react";
import Link from "next/link";

const Hero2Section = ({
  backgroundImage = "/Homehero.jpg",
  subtitle,
  title,
  description,
  buttonText, // optional
  buttonLink, // optional
  topLeftLabel, // optional label text
}) => {
  return (
    <section
      className="relative flex justify-center items-center text-center text-white overflow-hidden 
                 h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[75vh] px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/50 to-transparent"></div>

      {/* Top-left label */}
      {topLeftLabel && (
        <span className="absolute top-4 left-4 z-20 text-gray-300 text-xs sm:text-sm md:text-base  ">
          {topLeftLabel}
        </span>
      )}

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-2 sm:px-4 md:px-6">
        {subtitle && (
          <h5 className="text-[#E40D11] underline decoration-[#BC153F] decoration-2 underline-offset-4 
                         uppercase tracking-widest mb-3 text-xs sm:text-sm md:text-base ">
            {subtitle}
          </h5>
        )}

        {title && (
          <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 font-rubik leading-tight">
            {title}
          </h1>
        )}

        {description && (
          <p className="text-[11px] sm:text-sm md:text-base lg:text-sm text-gray-200 leading-relaxed mb-4 font-calibri">
            {description}
          </p>
        )}

        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <button className="bg-[#E40D11] hover:bg-[#b50b0f] text-white py-2 sm:py-3 px-5 sm:px-7 
                               rounded-full text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-4 
                               transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero2Section;
