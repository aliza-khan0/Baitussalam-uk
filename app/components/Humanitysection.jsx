"use client";
import { useState } from "react";
import LearnMoreButton from "./ui/learnmore";
import DonationModal from "./Donationform";
import { useRouter } from "next/navigation";

export default function Humanitysection({
  title = "Serving Humanity with Comapssion",
  subtitle = "ABOUT BAITUSSALAM UK",
  desc1 = "Who we are, what we stand for, and how we serve communities with compassion.",
  desc2 = "Baitussalam UK is a registered charity (Charity No. 1208852) dedicated to alleviating hardship, empowering individuals, and restoring dignity. We believe that every person deserves access to education, healthcare, food, and the opportunity to live with dignity.",
  desc3="Since our establishment, we have been actively working to support vulnerable families, provide relief during emergencies, and create long-term solutions that uplift entire communities. Our projects span education, healthcare, food security, orphan care, and rapid response initiatives—ensuring that no one is left behind.",
  buttonText = "Learn More",
  largeImg = "/circleimage.png",
}) {

    const router = useRouter(); // ✅ Initialize router

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-white overflow-hidden px-6 sm:px-10 lg:px-12 py-16 lg:py-24 mt-19  gap-8">
      {/* LEFT SIDE - TEXT */}

      <div className="flex-1 relative flex justify-center items-center  lg:mt-0     ">
       
          <img
            src={largeImg}
            alt="Featured Campaign"
            className="w-full h-auto object-contain"
          />
        
      </div>
      <div className="flex-1 max-w-full lg:max-w-[600px]">
        <p className="text-red-600 text-sm sm:text-[14px] uppercase tracking-wide mb-2 inline-block border-b-2 border-[#BC153F] pb-1">
          {subtitle}
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-gray-900 leading-tight sm:leading-snug mb-6">
          {title}
        </h2>

        <p className="text-sm font-bold sm:text-[14px] text-gray-600 leading-relaxed mb-4">
          {desc1}
        </p>

        <p className="text-sm sm:text-[14px] text-gray-600 leading-relaxed mb-6 sm:mb-8">
          {desc2}
        </p>

        <p className="text-sm sm:text-[14px] text-gray-600 leading-relaxed mb-4">
          {desc3}
        </p>

        <LearnMoreButton
          label={buttonText}
          bgColor="#22305B"
          textColor="white"
          hoverColor="#1a2447"
          className="px-5 py-2 text-sm"
          onClickAction={() => router.push("/about")} // ✅ Navigate to About page
        />

      
      </div>

      {/* RIGHT SIDE - IMAGE */}
      
    </section>
  );
}
