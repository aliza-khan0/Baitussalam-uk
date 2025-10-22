"use client";
import React, { useState, use } from "react";
import { causesData } from "../causesData";
import LearnMoreButton from "@/app/components/ui/learnmore";
import InsideSection from "@/app/components/InsideSection";
import SmileSection from "@/app/components/SmileSection";
import DonationModal from "@/app/components/Donationform";
import Storiessection from "@/app/components/StoriesSection";
import Ourworksupport from "@/app/components/Ourworksupport";
import TrustSection from "@/app/components/Trustsection";
import Image from "next/image";

export default function CauseDetailPage({ params }) {
  const { slug } = use(params);
  const cause = causesData.find((item) => item.slug === slug);
  const [donationType, setDonationType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [amount, setAmount] = useState("");

  if (!cause)
    return (
      <div className="h-screen flex justify-center items-center text-xl text-red-600">
        Cause not found
      </div>
    );

  return (
    <div className="bg-white min-h-screen font-[Rubik,sans-serif]">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-[6%] h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${cause.heroImage2})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Left Text */}
        <div className="relative z-10 text-white max-w-[45%] md:text-left text-center mb-10 md:mb-0">
          <h5 className="text-[#E40D11] uppercase underline underline-offset-4 decoration-[#E40D11] mb-3 text-sm tracking-wide">
            {cause.herosubtitle}
          </h5>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            {cause.herotitle}
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-medium">
            {cause.herodescription}
          </p>
        </div>

        {/* Donation Form */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full md:w-[45%] p-6 md:p-8 md:translate-y-[160px]">
          <h2 className="text-[#b0142e] text-2xl font-extrabold mb-1">
            Join Our Mission
          </h2>
          <p className="text-gray-600 font-medium mb-4">Easy Donation</p>

          <form className="flex flex-col gap-3">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-left">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-left">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
              />
            </div>

            {/* Donation Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-left">
                Donation Type
              </label>
              <select
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
              >
                <option value="">Select Donation Type</option>
                <option value="one-time">One Time</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-left">
                Donation Amount
              </label>
              <div className="flex flex-wrap gap-3 mb-2">
                {[10, 50, 80, 100, 600].map((val) => (
                  <label
                    key={val}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <input
                      type="radio"
                      name="amount"
                      onChange={() => setAmount(val)}
                      checked={amount == val}
                      className="accent-[#b0142e]"
                    />
                    £{val}
                  </label>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-left">
                Payment Method
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { id: "card", label: "Credit/Debit Card" },
                  { id: "paypal", label: "PayPal" },
                  { id: "bank", label: "Bank Transfer" },
                ].map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="accent-[#b0142e]"
                    />
                    {method.label}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-[40%] mt-3 bg-[#0a1a3c] text-white font-semibold py-2 rounded-md hover:bg-[#0d2554] transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </section>

      {/* ===== GLOBAL CONTAINER ===== */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-24 mt-48">
        {/* ABOUT SECTION */}
        <section className="grid md:grid-cols-2 gap-19 items-center">
          <div className="flex justify-center">
            <img
              src={cause.sectwoimg}
              alt={cause.herotitle || "Cause Image"}
              width={460}
              height={400}
              className="object-cover rounded-md"
            />
          </div>

          <div>
            <h5 className="text-[#dc2626] underline underline-offset-4 decoration-[#dc2626] text-sm uppercase mb-2 tracking-wide">
              About This Program
            </h5>
            <h2 className="text-[33px] font-semibold text-black leading-snug mb-4">
              Serving Humanity with Compassion
            </h2>
            <p className="text-[#5C5C5C] text-sm mb-3 leading-relaxed">
              Baitussalam UK is a registered charity dedicated to alleviating
              hardship, empowering individuals, and fostering dignity.
            </p>
            <p className="text-[#5C5C5C] text-sm leading-relaxed">
              Rooted in transparency, accountability, and sincerity, we are
              committed to making every donation count.
            </p>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-[#dc2626] underline underline-offset-4 decoration-[#dc2626] text-sm uppercase mb-2 tracking-wide">
              Impact
            </h5>
            <h2 className="text-[33px] font-semibold text-black leading-snug mb-4">
              The Difference You Make
            </h2>
            <p className="text-[#5C5C5C] text-sm mb-3 leading-relaxed">
              Our mission is to empower vulnerable individuals by providing them
              with the essential support they need to live with dignity.
            </p>
            <p className="text-[#5C5C5C] text-sm leading-loose">
              £20 → Provides school supplies for one child. <br />
              £50 → Covers monthly school fees for a child. <br />
              £100 → Provides books and uniforms. <br />
              £200 → Supports educational programs for a child.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/difference.png"
              alt="Impact Difference"
              width={520}
              height={400}
              className="object-cover rounded-md"
            />
          </div>
        </section>
      </div>

      {/* Remaining Sections */}
      <Storiessection />
      <Ourworksupport
        title="How We Support Education"
        subtitle="OUR WORK"
        description="Amina shared, “I had no idea how we would survive this Ramadan. Your help has given us not just food, but hope. May Allah bless those who made this possible.”"
        mainImage="/ourwork2.png"
      />
      <TrustSection />
      <SmileSection
        title="Be the Reason for Change Today"
        description="Your donation ensures families receive food, care, and hope. Join us in spreading compassion."
        ModalComponent={DonationModal}
      />
      <InsideSection />
    </div>
  );
}
