"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DonationModal from "../components/Donationform";
import LearnMoreButton from "./ui/learnmore";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Our Work", "/our-work"],
    ["Events & Campaigns", "/events"],
    ["Contact Us", "/contact"],
    ["Blog", "/blog"],
  ];

  return (
    <nav className="relative bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {/* Full Height Vertical Line (hide on small screens) */}
      <div className="absolute right-[190px] top-0 bottom-0 w-[1.5px] bg-gray-400 hidden lg:block"></div>

      {/* Top Bar */}
     <div className="relative flex justify-between items-center px-4 sm:px-6 md:px-10 min-h-[57px] py-2">

        {/* Logo */}
        <div className="flex items-center justify-center z-10 h-full">
  <Image
    src="/logo.png"
    alt="Baitussalam UK"
    width={190}
    height={300}
    className="object-contain 
               h-[30px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[60px] mb-[-24px]"
  />
</div>



        {/* Hamburger Menu (visible only on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-[#22305B] z-40"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Right Section (hidden on mobile) */}
        <div className="hidden lg:flex items-end ml-auto gap-6">
          {/* Contact Info */}
          <div className="flex gap-8 items-center mb-[15px]">
            {/* Call */}
            <div className="flex items-center gap-2 text-gray-600 text-[0.875rem]">
              <div className="bg-[#BC153F] text-white rounded-full p-2 flex items-center justify-center m-2 text-[0.75rem]">
                <Image
                  src="/call.png"
                  alt="Call Icon"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Call Us
                </p>
                <p className="text-[0.65rem] text-black font-semibold">
                  123-456-9034
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-600 text-[0.875rem] mr-8">
              <div className="bg-blue-900 text-white rounded-full p-2 flex items-center justify-center text-[0.75rem]">
                <Image
                  src="/email.png"
                  alt="Mail Icon"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Email Us
                </p>
                <p className="text-[0.65rem] font-semibold text-black">
                  Baitussalam@mail.com
                </p>
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <LearnMoreButton
            label="Donate Now"
            bgColor="#22305B"
            textColor="white"
            hoverColor="#1a2447"
            onClickAction={() => setShowDonateForm(true)}
          />
        </div>

        {/* Horizontal Gradient Line (only for large screens) */}
        <div className="absolute z-0 left-[200px] right-[190px] bottom-[13px] h-[2px] bg-gradient-to-r from-transparent via-gray-400 via-[80%] to-gray-600 hidden lg:block"></div>
      </div>

      {/* Bottom Navigation Menu for Large Screens */}
      {/* Bottom Navigation Menu for Large Screens */}
<div className="hidden lg:flex justify-end items-center gap-14 py-1 text-[#1F2937] font-medium text-sm mr-[210px]">
  {navLinks.map(([label, href], index) => (
    <Link
      key={href}
      href={href}
      onMouseEnter={() => setHoveredLink(index)}
      onMouseLeave={() => setHoveredLink(null)}
      className={`relative cursor-pointer transition-colors duration-300 ${
        hoveredLink === index ? "text-[#111827]" : "text-[#1F2937]"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 bottom-[-1px] h-[2px] bg-red-600 transition-all duration-300 ${
          hoveredLink === index ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  ))}
</div>


      {/* Overlay background when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Dropdown Menu (Slide-in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[55%] sm:w-[50%] bg-white shadow-2xl flex flex-col items-center gap-6 pt-14 text-[black] font-medium text-base z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#BC153F] transition"
          >
            {label}
          </Link>
        ))}

        <div className="mt-4">
          <LearnMoreButton
            label="Donate Now"
            bgColor="#22305B"
            textColor="white"
            hoverColor="#1a2447"
            onClickAction={() => setShowDonateForm(true)}
          />
        </div>

        

         <div className="flex items-center gap-2 text-gray-600 text-[0.875rem] mr-8">
              <div className="bg-blue-900 text-white rounded-full p-2 flex items-center justify-center text-[0.75rem]">
                <Image
                  src="/email.png"
                  alt="Mail Icon"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Email Us
                </p>
                <p className="text-[0.65rem] font-semibold text-black">
                  Baitussalam@mail.com
                </p>
              </div>
              <div className="bg-[#BC153F] text-white rounded-full p-2 flex items-center justify-center m-2 text-[0.75rem]">
                <Image
                  src="/call.png"
                  alt="Call Icon"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Call Us
                </p>
                <p className="text-[0.65rem] text-black font-semibold">
                  123-456-9034
                </p>
              </div>
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
    </nav>
  );
}
