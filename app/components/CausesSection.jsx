"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LearnMoreButton from "./ui/learnmore";
import DonationModal from "./Donationform";
import { causesData } from "../causes/causesData";

const CausesSection = ({
  sectionTitle = "Our Causes",
  mainHeading = "Together, We Create Change",
  description = "Your support helps us reach the most vulnerable through impactful projects.",
}) => {
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const router = useRouter();

  return (
    <section className="pt-20 pb-20 px-6 md:px-10 lg:px-24 bg-white text-center">
      <div className="max-w-[1200px] mx-auto">
        {/* Dynamic Headings */}
        <h5 className="text-[#dc2626] uppercase mb-2 tracking-wide font-medium font-tahoma underline decoration-[#BC153F] decoration-2 underline-offset-4">
          {sectionTitle}
        </h5>

        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
          {mainHeading}
        </h2>

        <p className="text-[#5C5C5C] mb-15 font-semibold text-xs md:text-sm">
          {description}
        </p>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {causesData.slice(0, 3).map((cause) => (
            <div
              key={cause.slug}
              className="relative rounded-xl overflow-hidden shadow-lg h-[320px] flex flex-col justify-end text-left group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${cause.heroImage})` }}
              >
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: cause.shade }}
                ></div>
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-6 text-left">
                <h3 className="text-xl md:text-2xl mb-2 text-white">
                  {cause.title}
                </h3>
                <p className="text-white text-sm md:text-base mb-4 font-medium font-Nunito">
                  {cause.description}
                </p>
                <div className="flex flex-row gap-1">
                  <LearnMoreButton
                    label="Learn More"
                    bgColor="#E40D11"
                    textColor="#F5F5F5"
                    onClickAction={(e) => {
                      e?.stopPropagation();
                      router.push(`/causes/${cause.slug}`);
                    }}
                  />
                  <LearnMoreButton
                    label="Donate Now"
                    borderColor="white"
                    bgColor="none"
                    onClickAction={() => {
                      setSelectedCampaign(cause.title);
                      setShowDonateForm(true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Big Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {causesData.slice(3, 5).map((cause) => (
            <div
              key={cause.slug}
              className="relative rounded-xl overflow-hidden shadow-lg min-h-[340px] flex flex-col justify-end text-left group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${cause.heroImage})` }}
              >
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: cause.shade }}
                ></div>
              </div>

              <div className="relative p-6 text-left">
                <h3 className="text-xl md:text-2xl mb-2 text-white font-semibold">
                  {cause.title}
                </h3>
                <p className="text-white text-sm md:text-base mb-4 font-medium font-rubik">
                  {cause.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <LearnMoreButton
                    label="Learn More"
                    bgColor="#E40D11"
                    textColor="#F5F5F5"
                    onClickAction={(e) => {
                      e?.stopPropagation();
                      router.push(`/causes/${cause.slug}`);
                    }}
                  />
                  <LearnMoreButton
                    label="Donate Now"
                    borderColor="white"
                    bgColor="none"
                    onClickAction={() => {
                      setSelectedCampaign(cause.title);
                      setShowDonateForm(true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donate Modal */}
      {showDonateForm && (
        <DonationModal
          open={showDonateForm}
          setOpen={setShowDonateForm}
          selectedCampaign={selectedCampaign}
          causesData={causesData}
        />
      )}
    </section>
  );
};

export default CausesSection;
