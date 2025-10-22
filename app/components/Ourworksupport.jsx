import React from "react";

const Ourworksupport = ({
  title = "The Difference Your Support Makes",
  subtitle = "IMPACT",
  description = "Together with our donors and volunteers, we have touched thousands of lives.",
  stats = [
    { title: "50+ Water Projects", img: "/drop.png", desc: "Your support helps us reach the most vulnerable through impactful projects." },
    { title: "200+ Children Sponsored", img: "/cap.png", desc: "Your support helps us reach the most vulnerable through impactful projects." },
    { title: "50+ Community Projects", img: "/community.png", desc: "Your support helps us reach the most vulnerable through impactful projects." },
    { title: "500+ Volunteers", img: "/child.png", desc: "Your support helps us reach the most vulnerable through impactful projects." },
  ],
  mainImage = "/impact.png",
}) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white px-6 sm:px-8 lg:px-24 py-16 gap-12 font-sans">
      
      {/* Left Content */}
      <div className="flex-1 lg:pr-20">
        <p className="text-[#c8102e] font-bold text-sm tracking-wide mb-1">
          {subtitle}
        </p>
        <h2 className="text-[30px] font-bold text-black mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-[15px] leading-[1.2] mb-5">
          {description}
        </p>

        {/* Stats List */}
        <div className="flex flex-col gap-5">
          {stats.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-[#BC153F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[25px] h-[25px] object-contain"
                />
              </div>
              <div>
                <h4 className="text-black font-semibold text-[15px] mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[11px] leading-[1.4]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-[560px] overflow-hidden relative">
          <img
            src={mainImage}
            alt="Main Impact"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </section>
  );
};

export default Ourworksupport;
