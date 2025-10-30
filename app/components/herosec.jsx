"use client";

import LearnMoreButton from "./ui/learnmore";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16"
      style={{ backgroundImage: "url('/Homehero.jpg')" }}
    >
      {/* Dark overlay behind text */}
      <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-1/2 bg-gradient-to-r from-black/70 to-transparent z-0"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-full md:max-w-[850px] mx-auto md:ml-0 text-center md:text-left">
        {/* Tagline */}
        <p className="text-[#E40D11] underline decoration-[#BC153F] uppercase tracking-widest mb-3 font-tahoma text-sm sm:text-base md:text-[15px]">
          TURNING COMPASSION INTO ACTION.
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[57px] leading-snug sm:leading-snug md:leading-[1.1] font-rubik font-bold mb-4">
          Together, We Can <br className="hidden sm:block" />
          <span className="font-normal md:text-[54px] ">Build a Brighter</span> <br className="hidden sm:block" />
          Future
        </h1>

        {/* Description */}
        <p className="mb-6 text-sm sm:text-base md:text-[15px] font-rubik text-gray-100">
          Empower every vulnerable individual through impactful healthcare,
          <br className="hidden sm:block" />
          education, and community services.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <LearnMoreButton
            label="Learn About Our Work"
            bgColor="#E40D11"
            textColor="#F5F5F5"
            navigateTo="/about"
          />
        </div>
      </div>
    </section>
  );
}
