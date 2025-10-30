"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DonationModal({ open, setOpen, selectedCampaign, causesData = [] }) {
  const [donationFrequency, setDonationFrequency] = useState("One-Time");
  const [donationType, setDonationType] = useState("Zakat");
  const [paymentOption, setPaymentOption] = useState("Credit/Debit Card");
  const [selectedCampaignOption, setSelectedCampaignOption] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [amount, setAmount] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Auto-fill campaign when modal opens
  useEffect(() => {
    if (selectedCampaign) {
      setSelectedCampaignOption(selectedCampaign);
      setSelectedService("");
    }
  }, [selectedCampaign]);

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
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 text-3xl"
            >
              &times;
            </button>

            {/* Header */}
            <div className="text-center text-[#BC153F] py-6 px-6 text-3xl font-bold">
              Quick & Easy Donate
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh] text-gray-800">
              {/* Donation Frequency & Amount */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="mb-3 text-left">Select Donation Frequency</h3>
                  <div className="flex flex-wrap gap-3">
                    {["One-Time", "Monthly", "Yearly"].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setDonationFrequency(freq)}
                        className={`px-4 py-2 rounded font-medium text-sm sm:text-base ${
                          donationFrequency === freq
                            ? "bg-[#22305B] text-white"
                            : "border border-gray-300 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-left">Enter Your Own Amount</h3>
                  <input
                    type="number"
                    placeholder="Enter your own amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-300 text-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded w-full text-sm sm:text-base"
                  />
                </div>
              </div>

              <p className="text-left text-gray-800 text-sm">
                With just £25, you can provide a struggling family with enough food to stay.
              </p>

              {/* Donation Type */}
                  <div>
                    <h3 className="mb-3 text-left">Donation Type</h3>
                    <div className="flex gap-3 flex-wrap">
                      {["Zakat", "Sadqah", "General Donation"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setDonationType(type)}
                          className={`px-4 py-2 rounded font-medium text-sm sm:text-base ${
                            donationType === type
                              ? "bg-[#22305B] text-white"
                              : "border border-gray-300 text-gray-800 hover:bg-gray-100"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                </div>

                {/* Campaign & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      className="border border-gray-300 text-gray-800 rounded px-3 py-2 sm:px-4 sm:py-2 w-full mt-8 text-sm sm:text-base"
                      value={selectedCampaignOption}
                      onChange={(e) => {
                        setSelectedCampaignOption(e.target.value);
                        setSelectedService("");
                      }}
                      disabled={!!selectedService}
                    >
                      <option value="">-- Select Campaign --</option>
                      {causesData.map((cause) => (
                        <option key={cause.slug} value={cause.title}>
                          {cause.title}
                        </option>
                      ))}
                    </select>
                  </div>

               <div className="w-full mt-6">
  <select
    className="w-full border border-gray-300 rounded-lg text-gray-800 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#22305B] transition-all duration-200"
    value={selectedService}
    onChange={(e) => {
      setSelectedService(e.target.value);
      setSelectedCampaignOption("");
    }}
    disabled={!!selectedCampaignOption}
  >
    <option value="">-- Select Service --</option>
    {causesData.map((cause, index) => (
      <option key={index} value={cause.title}>
        {cause.title}
      </option>
    ))}
  </select>
</div>


              </div>

              {/* User Details */}
              <div>
                <h3 className="mb-3 text-left">Your Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["name", "email", "address"].map((field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={userDetails[field]}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, [field]: e.target.value })
                      }
                      className="border border-gray-300 text-gray-800 rounded px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
                    />
                  ))}
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                    className="border border-gray-300 text-gray-800 rounded px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base sm:col-span-3"
                  />
                </div>
              </div>

              {/* Payment Options */}
              <div>
                <h3 className="mb-3 text-left">Payment Options</h3>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {["Credit/Debit Card", "PayPal", "Bank Transfer"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-gray-800 cursor-pointer text-sm sm:text-base"
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentOption === option}
                        onChange={() => setPaymentOption(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <button className="w-full bg-[#E40D11] text-white py-3 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition">
                Donate Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
