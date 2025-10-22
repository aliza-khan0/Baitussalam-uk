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
}) => {
  return (
    <section
      className="relative flex justify-center items-center text-center text-white overflow-hidden h-[70vh] sm:h-[60vh] md:h-[70vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-4 sm:px-6">
        {subtitle && (
          <h5 className="text-[#E40D11] underline decoration-[#BC153F] decoration-2 underline-offset-2 uppercase tracking-widest mb-2 text-sm font-tahoma">
            {subtitle}
          </h5>
        )}

        {title && (
          <h1 className="text-xl sm:text-4xl md:text-4xl font-bold mb-5 font-rubik leading-tight">
            {title}
          </h1>
        )}

        {description && (
          <p className="text-[10px] sm:text-sm mb-3 font-calibri">
  {description}
</p>

        )}

        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <button className="bg-[#E40D11] hover:bg-[#b50b0f] text-white py-2 px-6 rounded-full text-sm sm:text-base font-rubik mt-3 transition-colors">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero2Section;
