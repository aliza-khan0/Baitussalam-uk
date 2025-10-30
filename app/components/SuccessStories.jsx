"use client";
import { useState } from "react";
import DonationModal from "../components/Donationform";
import LearnMoreButton from "./ui/learnmore";
import { causesData } from "../causes/causesData";

export default function SuccessStories() {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center gap-10 py-20 bg-white">
      {/* Left Overlapping Image */}
      <div className="w-full lg:w-auto lg:absolute lg:left-[8%] lg:top-1/2 lg:-translate-y-1/2 z-10 flex justify-center">
        <img
          src="/successstories.png"
          alt="Success Stories"
          className="w-[520px] max-w-full h-[400px] rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Blue Background Block (Right Side) */}
      <div
        className="
          relative w-full flex-1 
          bg-[#0a1d3c8a] 
          rounded-tl-[40px] sm:rounded-tl-[60px] 
          rounded-bl-[40px] sm:rounded-bl-[60px] 
          p-6 sm:p-10 
          text-white 
          overflow-hidden 
          lg:ml-[28rem] 
          bg-cover bg-center
        "
        style={{ backgroundImage: "url('/map.png')" }}
      >
        {/* Light Blue Overlay */}
        <div className="absolute inset-0 bg-[rgba(10,29,60,0.8)] rounded-tl-[40px] sm:rounded-tl-[60px] rounded-bl-[40px] sm:rounded-bl-[60px] z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 pt-8 sm:pt-11 pb-8 sm:pb-10 text-center lg:text-left px-2 sm:px-40">
          <p className="text-[12px] sm:text-[14px] tracking-wider uppercase text-white mb-3 inline-block border-b-2 border-white pb-1">
            Our Impact in Action
          </p>

          <h2 className="text-[20px] sm:text-[24px] md:text-[27px] font-bold mb-4 sm:mb-5 leading-[1.3]">
            Success Stories of Hope <br className="hidden sm:block" /> and Change
          </h2>

          <p className="text-[12px] sm:text-[13px] leading-6 text-[#D7D6D6] mb-4 sm:mb-5 max-w-[580px] mx-auto lg:mx-0">
            Behind every donation is a real story of transformation. Families who once
            struggled to meet their basic needs are now rebuilding their lives with
            dignity. Children are attending school, receiving regular meals, and dreaming
            of a brighter future because of your support.
          </p>

          <p className="text-[12px] sm:text-[13px] leading-6 text-[#D7D6D6] mb-6 sm:mb-8 max-w-[580px] mx-auto lg:mx-0">
            Thanks to Baitussalam UK, my children now have access to education and regular
            meals. This support has given us hope for a brighter tomorrow and the strength
            to move forward.
          </p>

          {/* Donate Button */}
          <div className="flex justify-center lg:justify-start">
            <LearnMoreButton
              label="Donate"
              bgColor="#E40D11"
              textColor="white"
              hoverColor="#b50b0f"
              onClickAction={() => setShowDonateForm(true)}
              className="px-4 py-2 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        open={showDonateForm}
        setOpen={setShowDonateForm}
        causesData={causesData}
        
      />
    </section>
  );
}
