"use client";
import React, { useState } from "react";

const SmileSection = ({
  title = "Be the Reason Someone Smiles Today",
  description = "A small act of kindness can bring joy, hope, and dignity to those in need. Become part of our mission today.",
  bgImage = "/smiles.png",
  buttonLabel = "Donate Now",
  buttonBgColor = "#BC153F",
  buttonTextColor = "white",
  buttonHoverColor = "#9b1233",
  ModalComponent, // pass in your modal component
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center text-white py-27 px-6 md:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🔹 Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Content */}
      <div className="relative text-center max-w-3xl mx-auto px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-3 leading-snug">
          {title}
        </h2>

        <p className="text-gray-200 text-sm sm:text-base mb-5 leading-relaxed">
          {description}
        </p>

        {/* 🔹 Button */}
        <button
          onClick={() => setShowModal(true)}
          style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          className="px-6 py-3 rounded-lg font-semibold transition hover:opacity-90"
        >
          {buttonLabel}
        </button>
      </div>

      {/* 🔹 Modal */}
      {showModal && ModalComponent && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-6 top-4 text-3xl text-gray-700 hover:text-gray-900 transition"
            >
              ✕
            </button>

            {/* Modal Content */}
            <ModalComponent open={showModal} setOpen={setShowModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default SmileSection;
