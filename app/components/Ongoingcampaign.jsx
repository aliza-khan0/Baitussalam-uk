"use client";
import React, { useState } from "react";
import LearnMoreButton from "./ui/learnmore";
import DonationModal from "./Donationform";
import { causesData } from "../causes/causesData";

const CampaignSection = ({
  title = "Current Campaigns You Can Support",
  subtitle = "Your support helps us reach the most vulnerable through impactful projects.",
  sectionLabel = "Ongoing Campaigns",
  campaigns = [],
  buttonText = "Donate Now",
  showLoadMore = true,
}) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showDonateForm, setShowDonateForm] = useState(false);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  return (
   <section className="mb-10 px-5 md:px-10 lg:px-20 bg-white py-10 sm:py-16 md:py-20 lg:py-24">

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <p className="text-[#E40D11] uppercase tracking-wide text-sm underline underline-offset-4 decoration-[#BC153F] mb-2 ml-2">
          {sectionLabel}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 mb-10 mx-2">
          <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="max-w-sm text-xs sm:text-sm text-gray-600 leading-snug font-medium">
            {subtitle}
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
  {campaigns.slice(0, visibleCount).map((item, index) => (
    <div
      key={index}
      className="w-[90%] sm:w-[300px] bg-transparent rounded-xl  overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="bg-white border border-gray-400 border-t-0 rounded-b-xl p-5">
        <h1 className="text-lg font-Rubik mb-2 text-gray-800">{item.title}</h1>

        {item.desc && <p className="text-xs font-semibold text-gray-600 mb-1">{item.desc}</p>}
        {item.date && (
          <p className="text-xs font-semibold text-gray-500 mb-4">Date: {item.date}</p>
        )}

        <LearnMoreButton
          label={buttonText}
          bgColor="#22305B"
          textColor="white"
          onClickAction={() => setShowDonateForm(true)}
        />
      </div>
    </div>
  ))}
</div>


        {/* Load More Button */}
        {showLoadMore && visibleCount < campaigns.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-[#BC153F] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#a11236] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Donation Modal */}
      {showDonateForm && (
        <div
          onClick={() => setShowDonateForm(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg p-5 md:p-8"
          >
            <button
              onClick={() => setShowDonateForm(false)}
              className="absolute top-4 right-6 text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <DonationModal open={showDonateForm} setOpen={setShowDonateForm}  causesData={causesData}  />
          </div>
        </div>
      )}
    </section>
  );
};

export default CampaignSection;
