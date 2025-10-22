"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DonationModal({ open, setOpen }) {
  const [donationFrequency, setDonationFrequency] = useState("One-Time");
  const [donationType, setDonationType] = useState("Zakat");
  const [paymentOption, setPaymentOption] = useState("Credit/Debit Card");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-[#001B44]/30 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#22305B] text-white py-4 px-6 text-xl font-semibold mt-5">
              Quick & Easy Donate
            </div>

            {/* Body */}
            <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh] relative">
              {/* Donation Frequency */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Select Donation Frequency
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["One-Time", "Monthly", "Yearly"].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setDonationFrequency(freq)}
                      className={`px-4 py-2 rounded font-medium ${
                        donationFrequency === freq
                          ? "bg-[#BC153F] text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                  <input
                    type="text"
                    placeholder="Enter Your Own Amount"
                    className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  With just $25, you can provide a struggling family with enough food to stay.
                </p>
              </div>

              {/* Donation Type */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Donation Type</h3>
                <div className="flex gap-3 flex-wrap">
                  {["Zakat", "Sadqah", "General Donation"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`px-4 py-2 rounded font-medium ${
                        donationType === type
                          ? "bg-[#BC153F] text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Support a Service</h3>
                  <select className="border border-gray-300 rounded px-4 py-2 w-full">
                    <option>Services</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Food</option>
                  </select>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Support a Program</h3>
                  <select className="border border-gray-300 rounded px-4 py-2 w-full">
                    <option>Program</option>
                    <option>Relief</option>
                    <option>Orphan Care</option>
                    <option>Development</option>
                  </select>
                </div>
              </div>

              {/* User Details */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Your Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2"
                  />
                </div>
              </div>

              {/* Payment Options */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Payment Options</h3>
                <div className="flex flex-wrap items-center gap-6">
                  {["Credit/Debit Card", "PayPal", "Bank Transfer"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentOption === option}
                        onChange={() => setPaymentOption(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-[#BC153F] hover:bg-[#A0122B] cursor-pointer text-white font-semibold py-3 px-8 rounded">
                  Donate Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
