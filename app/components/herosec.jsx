"use client";

import LearnMoreButton from "./ui/learnmore";

export default function HeroSection() {
  return (
   <section
  className="relative bg-cover bg-center text-white py-24 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16"
  style={{ backgroundImage: "url('/Homehero.jpg')" }}
>
  {/* Dark overlay behind text */}
  <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-1/2 bg-gradient-to-r from-black/70 to-transparent z-0"></div>

  <div className="relative max-w-full md:max-w-[850px] ml-0 z-10">
    <p className="text-[#E40D11] underline decoration-[#BC153F] uppercase tracking-widest mb-3 font-tahoma text-base sm:text-lg md:text-[15px]">
      TURNING COMPASSION INTO ACTION.
    </p>

    <h1 className="w-full md:w-[850px] text-4xl sm:text-5xl md:text-[65px] leading-tight sm:leading-snug md:leading-[1.1] font-rubik font-bold mb-2">
      Together, We Can <br />
      <span className="font-normal">Build a Brighter</span> <br />
      Future
    </h1>

    <p className="mb-4 text-white font-rubik text-base sm:text-lg md:text-[14px]">
      Empower every vulnerable individual through impactful healthcare, <br className="hidden sm:block"/>
      education, and community services.
    </p>

    <LearnMoreButton
      label="Learn About Our Work"
      bgColor="#E40D11"
      textColor="#F5F5F5"
      navigateTo="/about"
    />
  </div>
</section>

  );
}
