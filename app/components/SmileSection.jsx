"use client";
import { useState } from "react";
import { causesData } from "../causes/causesData";
import DonationModal from "./Donationform";

export default function SmileSection() {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center text-white py-28 px-6 md:px-16 overflow-visible"
      style={{ backgroundImage: "url('/smiles.png')" }}
    >
      {/* Overlay behind content */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center max-w-3xl mx-auto px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-3 leading-snug">
          Be the Reason Someone Smiles Today
        </h2>

        <p className="text-gray-200 text-xs sm:text-base ml-28 mr-28 mb-5 leading-relaxed">
          A small act of kindness can bring joy, hope, and dignity to those in need.
          Become part of our mission today.
        </p>

        <button
          onClick={() => setShowDonateForm(true)}
          className="bg-[#BC153F] text-white px-6 py-3 rounded-lg transition hover:opacity-90 text-sm sm:text-base md:text-lg"
        >
          Donate Now
        </button>
      </div>

      {/* Donation Form Modal */}
      {showDonateForm && (
        <DonationModal
          open={showDonateForm}
          setOpen={setShowDonateForm}
          causesData={causesData}
        />
      )}
    </section>
  );
}
