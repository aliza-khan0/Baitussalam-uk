"use client";
import { useState } from "react";
import DonationModal from "../components/Donationform";
import LearnMoreButton from "./ui/learnmore";

export default function SuccessStories() {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section className="relative flex flex-col items-center py-20 bg-white overflow-hidden">
      {/* Top Image on small screens */}
      <div className="w-full flex justify-center mb-6 sm:mb-12 lg:hidden">
        <img
          src="/successstories.png"
          alt="Success Stories"
          className="w-80 h-60 sm:w-96 sm:h-72 rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Blue Section */}
      <div className="relative flex flex-col lg:flex-row items-center 
        bg-[url('/map.png')] bg-cover bg-center text-white 
        rounded-tl-[60px] rounded-bl-[60px] overflow-hidden 
        px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-24 
        min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full max-w-[1200px]"
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#0a1d3c]/80 rounded-tl-[60px] rounded-bl-[60px] z-0"></div>

        {/* Text content */}
        <div className="relative z-10 flex-1 text-center lg:text-left">
          <p className="text-[12px] sm:text-sm uppercase tracking-wider border-b-2 border-white inline-block pb-1 mb-2">
            Our Impact in Action
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[27px] font-bold mb-4 sm:mb-5 leading-snug">
            Success Stories of Hope <br /> and Change
          </h2>
          <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#D7D6D6] mb-3 sm:mb-5 max-w-[500px] sm:max-w-full mx-auto lg:mx-0">
            Behind every donation is a real story of transformation. Families who once
            struggled to meet their basic needs are now rebuilding their lives with
            dignity. Children are attending school, receiving regular meals, and
            dreaming of a brighter future because of your support.
          </p>
          <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#D7D6D6] mb-6 sm:mb-8 max-w-[500px] sm:max-w-full mx-auto lg:mx-0">
            Thanks to Baitussalam UK, my children now have access to education and
            regular meals. This support has given us hope for a brighter tomorrow and
            the strength to move forward.
          </p>

          <div className="flex justify-center lg:justify-start">
            <LearnMoreButton
              label="Donate Now"
              bgColor="#E40D11"
              textColor="white"
              hoverColor="#b50b0f"
              onClickAction={() => setShowDonateForm(true)}
              className="px-4 py-2 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Right-side image hidden on small screens */}
        <div className="relative flex-1 flex justify-center mt-6 lg:mt-0 lg:block hidden">
          <img
            src="/successstories.png"
            alt="Success Stories"
            className="w-full max-w-[400px] sm:max-w-[485px] h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Donate Modal */}
      {showDonateForm && (
        <div
          onClick={() => setShowDonateForm(false)}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto p-5 relative shadow-xl"
          >
            <button
              onClick={() => setShowDonateForm(false)}
              className="absolute right-10 top-8 text-2xl text-gray-800 cursor-pointer bg-none border-none"
            >
              ✕
            </button>

            <DonationModal open={showDonateForm} setOpen={setShowDonateForm} />
          </div>
        </div>
      )}
    </section>
  );
}
