

  import React, { use } from "react";
  import { causesData } from "../causesData";

  import InsideSection from "@/app/components/InsideSection";
  import SmileSection from "@/app/components/SmileSection";
  import DonationModal from "@/app/components/Donationform";
  import Storiessection from "@/app/components/StoriesSection";
  import Ourworksupport from "@/app/components/Ourworksupport";
  import TrustSection from "@/app/components/Trustsection";
  import CausesForm from "@/app/components/CausesForm";

  export default function CauseDetailPage({ params }) {
    const resolvedParams = use(params); 
      const { slug } = resolvedParams;

      const cause = causesData.find((item) => item.slug === slug);
    

    if (!cause)
      return (
        <div className="h-screen flex justify-center items-center text-xl text-red-600">
          Cause not found
        </div>
      );

    return (
      <div className="bg-white font-[Rubik,sans-serif]">
        {/* ===== HERO SECTION ===== */}
        <section
        className="relative flex flex-col md:flex-row justify-between items-center px-4 md:px-12 h-auto md:h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${cause.heroImage2})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Left Text */}
        <div className="relative z-10 text-white max-w-full md:max-w-[45%] text-center md:text-left mb-8 md:mb-0">
          <h5 className="text-[#E40D11] uppercase underline underline-offset-4 decoration-[#E40D11] mb-2 text-xs sm:text-sm tracking-wide mt-5 ">
            {cause.herosubtitle}
          </h5>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            {cause.herotitle}
          </h1>
          <p className="text-gray-200 text-sm sm:text-sm font-medium">
            {cause.herodescription}
          </p>
        </div>

        {/* Donation Form */}
        <CausesForm />
      </section>

        {/* ===== GLOBAL CONTAINER ===== */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 space-y-24 mt-24 md:mt-48">
          {/* ABOUT SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex justify-center">
              <img
                src={cause.sectwoimg}
                alt={cause.herotitle || "Cause Image"}
                className="object-cover rounded-md w-full max-w-md md:max-w-full"
              />
            </div>

            <div>
              <h5 className="text-[#dc2626] underline underline-offset-4 decoration-[#dc2626] text-xs sm:text-sm uppercase mb-2 tracking-wide">
                About This Program
              </h5>
              <h2 className="text-2xl sm:text-3xl md:text-[33px] font-semibold text-black leading-snug mb-4">
                Breaking the Cycle of Poverty Through Education
              </h2>
              <p className="text-[#5C5C5C] text-sm xs:text-base mb-2 sm:mb-3 leading-relaxed ">
                Baitussalam UK is a registered charity dedicated to alleviating
                hardship, empowering individuals, and fostering dignity.Baitussalam UK is a registered charity dedicated to alleviating
                hardship, empowering individuals, and fostering dignity.
              </p>
              <p className="text-[#5C5C5C] text-sm xs:text-base leading-relaxed">
                Rooted in transparency, accountability, and sincerity, we are
                committed to making every donation count.
                Rooted in transparency, accountability, and sincerity, we are
                committed to making every donation count.
              </p>
            </div>
          </section>

          {/* IMPACT SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-[#dc2626] underline underline-offset-4 decoration-[#dc2626] text-xs sm:text-sm uppercase mb-2 tracking-wide">
                Impact
              </h5>
              <h2 className="text-2xl sm:text-3xl md:text-[33px] font-semibold text-black leading-snug mb-4">
                The Difference You Make
              </h2>
              <p className="text-[#5C5C5C] text-sm sm:text-base mb-3 leading-relaxed">
                Our mission is to empower vulnerable individuals by providing them
                with the essential support they need to live with dignity.
              </p>
              <p className="text-[#5C5C5C] text-sm sm:text-base leading-loose">
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
                className="object-cover rounded-md w-full max-w-md md:max-w-full"
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
