import React from "react";
import CausesSection from "../components/CausesSection";
import SmileSection from "../components/SmileSection";
import InsideSection from "../components/InsideSection";
import VisionSection from "../components/Visionsection";
import Hero2Section from "../components/hero2";

const Page = () => {
  return (
     <div className="bg-white text-gray-900">
    <Hero2Section
                subtitle="ABOUT US"
                title=" Serving Humanity with Compassion "
                description="Baitussalam UK (Charity No. 1208852) is dedicated to turning compassion into action by empowering vulnerable communities through education, healthcare, food security, and long-term support."
                
                
              />


   <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-6 sm:px-12 lg:px-[8%] py-12 sm:py-16 bg-white">
  {/* Left Text */}
  <div className="text-center lg:text-left">
    <p className="text-red-600 text-xs sm:text-sm font-semibold uppercase mb-2 sm:mb-3 underline decoration-[#BC153F] decoration-2 underline-offset-2 tracking-wide">
      Who We Are
    </p>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
      Driven by Compassion, Guided by Accountability
    </h2>

    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
      Bakistanisan UK is committed to turning generosity into lasting change. We serve
      vulnerable families, orphans, and communities across the UK and beyond.
    </p>

    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
      Our mission is simple: to provide dignity, opportunity, and relief where it’s needed
      most. Every project we undertake is crafted to deliver care and support as rights, not
      privileges.
    </p>

    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
      Through partnerships, volunteers, and your support, we continue to deliver hope to
      thousands of lives every year.
    </p>
  </div>

  {/* Right Image */}
  <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto flex justify-center items-center mt-6 lg:mt-0">
    <img
      src="/whoweare.png"
      alt="Building"
      className="w-[90%] sm:w-[95%] lg:w-full h-auto object-cover "
    />
  </div>
</section>



<section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-6 sm:px-12 lg:px-[8%] py-16 mt-2 bg-white">
  {/* Gray background box */}
  <div className="absolute z-0 bg-gray-100 rounded-l-[20px] 
      top-24 bottom-10 right-0 
      left-0 lg:left-1/4
      lg:top-24 lg:bottom-10">
  </div>

  {/* Left Images */}
  <div className="relative z-10 flex justify-center lg:justify-start mt-8 lg:mt-0">
    <div className="relative w-full min-h-[300px] lg:min-h-[400px]">
      {/* Back Image */}
      <img
        src="/mission1.png"
        alt="Building"
        className="w-[90%] max-w-[300px] h-[400px] lg:w-full lg:max-w-[300px] lg:h-[400px] rounded-[20px] shadow-md mx-auto lg:mx-0"
      />

      {/* Front Image */}
      <img
        src="/mission2.png"
        alt="Building small"
        className="absolute top-36 lg:top-36 left-20 lg:left-36 w-[200px] sm:w-[220px] lg:w-[270px] h-[220px] sm:h-[250px] lg:h-[300px] rounded-[30px] border-4 border-white shadow-lg"
      />
    </div>
  </div>

  {/* Right Text */}
  <div className="relative z-10 text-center lg:text-left mt-8 lg:mt-0">
    <p className="text-red-600 text-xs sm:text-sm font-semibold uppercase mb-1 sm:mb-2 underline decoration-[#BC153F] decoration-2 underline-offset-2 tracking-wide pt-16 lg:pt-19  ">
      Mission
    </p>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
      Our Mission
    </h2>

    <p className="text-gray-500 text-[12px] sm:text-xs leading-relaxed mb-3 font-rubik">
      At Bakistanisan UK, our mission is to transform compassion into meaningful action by
      serving humanity with dignity, integrity, and accountability. We are dedicated to
      addressing the urgent needs of vulnerable individuals and families through holistic
      programs in education, healthcare, food security, and community empowerment.
    </p>

    <p className="text-gray-500 text-[12px] sm:text-xs leading-relaxed font-rubik lg:pb-11">
      We believe that true change is not just about providing temporary relief but about
      building sustainable opportunities that allow people to thrive. From orphan care to safe
      and nurturing environments for struggling widows and vulnerable families with ongoing
      assistance, every initiative we take is designed to restore hope and create a pathway
      toward self-reliance.
    </p>
  </div>
</section>


  


<VisionSection/>
<section className="relative bg-white text-center overflow-hidden py-16 sm:py-20 px-4 sm:px-12 font-sans">

  {/* Left Blue Background */}
  <div className="absolute top-[65%] left-0 transform -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-[#22305B] rounded-tr-[60px] rounded-br-[60px] z-0"></div>

  {/* Right Blue Background */}
  <div className="absolute top-[65%] right-0 transform -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-[#22305B] rounded-tl-[60px] rounded-bl-[60px] z-0"></div>

  {/* Headings */}
  <div className="text-[#E40D11] uppercase text-[12px] sm:text-[14px] tracking-wide mb-2 sm:mb-3 underline decoration-[#BC153F] decoration-2 underline-offset-2">
    OUR VALUES
  </div>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
    The Principles We Live By
  </h2>

  <p className="text-[12px] sm:text-sm text-black mb-12 sm:mb-16 max-w-xl sm:max-w-2xl mx-auto">
    Our work is built on principles that ensure trust, fairness, and meaningful impact.
  </p>

  {/* Cards */}
  <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
    {[
      { img: "/icon1.png", title: "Compassion", text: "Serving with empathy and care." },
      { img: "/icon2.png", title: "Transparency", text: "Using every donation responsibly." },
      { img: "/icon3.png", title: "Inclusivity", text: "Every individual deserves dignity and opportunity." },
      { img: "/icon4.png", title: "Accountability", text: "Creating measurable, lasting impact." },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#FBFBFB] shadow-md rounded-[15px] w-52 sm:w-56 md:w-60 h-48 sm:h-52 md:h-52 p-4 sm:p-6 text-center flex flex-col items-center justify-center"
      >
        <div className="bg-[#b2173f] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <img src={item.img} alt={item.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
        </div>
        <div className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</div>
        <div className="text-[10px] sm:text-[12px] text-gray-500">{item.text}</div>
      </div>
    ))}
  </div>
</section>



<CausesSection/>

<SmileSection/>

<InsideSection/>
    </div>


    
  );
};

export default Page;
