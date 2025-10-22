"use client";
import { useState } from "react";
import LearnMoreButton from "./ui/learnmore";
import DonationModal from "./Donationform";

export default function FeaturedCampaign({
  title = "Ramadan Food Drive 2025",
  subtitle = "Featured Project / Campaign",
  desc1 = "This Ramadan, Baitussalam UK is dedicated to spreading compassion and hope by providing warm meals and essential food packs to struggling families across the UK and beyond. For many vulnerable households, these food packs are not just meals — they are a lifeline that brings dignity, relief, and the comfort of knowing they are not forgotten.",
  desc2 = "Your Zakat and Sadaqah during this blessed month can put food on the table for a family in need, ease their hardships, and allow them to share in the spirit of Ramadan. Together, we can ensure that no one goes hungry and that every act of kindness multiplies in reward.",
  buttonText = "Donate for Ramadan",
  largeImg = "/fooddrive.png",
}) {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-white overflow-hidden px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      {/* LEFT SIDE - TEXT */}
      <div className="flex-1 max-w-full lg:max-w-[600px]">
        <p className="text-red-600 text-sm sm:text-[14px] uppercase tracking-wide mb-2 inline-block border-b-2 border-[#BC153F] pb-1">
          {subtitle}
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-gray-900 leading-tight sm:leading-snug mb-6">
          {title}
        </h2>

        <p className="text-sm sm:text-[14px] text-gray-600 leading-relaxed mb-4">
          {desc1}
        </p>

        <p className="text-sm sm:text-[14px] text-gray-600 leading-relaxed mb-6 sm:mb-8">
          {desc2}
        </p>

        <LearnMoreButton
          label={buttonText}
          bgColor="#22305B"
          textColor="white"
          hoverColor="#1a2447"
          className="px-5 py-2 text-sm"
          onClickAction={() => setShowDonateForm(true)}
        />

        {/* Donate Modal */}
        {showDonateForm && (
          <div
            onClick={() => setShowDonateForm(false)}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-8 relative shadow-xl"
            >
              <button
                onClick={() => setShowDonateForm(false)}
                className="absolute right-6 top-4 text-2xl text-gray-800 cursor-pointer"
              >
                ✕
              </button>

              <DonationModal open={showDonateForm} setOpen={setShowDonateForm} />
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex-1 relative flex justify-center items-center mt-10 lg:mt-0 lg:ml-12">
        <div className="relative w-full max-w-[485px]">
          <img
            src={largeImg}
            alt="Featured Campaign"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
