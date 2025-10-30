import React from "react";

const Ourworksupport = ({
  title = "The Difference Your Support Makes",
  subtitle = "IMPACT",
  description = "Together with our donors and volunteers, we have touched thousands of lives.",
  stats = [
    {
      title: "50+ Water Projects",
      img: "/drop.png",
      desc: "Your support helps us reach the most vulnerable through impactful projects.",
    },
    {
      title: "200+ Children Sponsored",
      img: "/cap.png",
      desc: "Your support helps us reach the most vulnerable through impactful projects.",
    },
    {
      title: "50+ Community Projects",
      img: "/community.png",
      desc: "Your support helps us reach the most vulnerable through impactful projects.",
    },
    {
      title: "500+ Volunteers",
      img: "/child.png",
      desc: "Your support helps us reach the most vulnerable through impactful projects.",
    },
  ],
  mainImage = "/impact.png",
}) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white px-6 sm:px-8 lg:px-20 py-16 gap-3 font-sans">
      {/* Left Content */}
      <div className="flex-1 lg:pr-20">
        <p className="text-red-600 text-sm uppercase tracking-wide mb-1.5 underline decoration-[#BC153F] decoration-2 underline-offset-4 pt-8 sm:pt-16">
  {subtitle}
</p>

        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-black mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-[13px] sm:text-[14px] leading-[1.5] mb-6">
          {description}
        </p>

        {/* Stats List */}
        <div className="flex flex-col gap-2 mr-5">
          {stats.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <div
                className="
                  bg-[#BC153F]
                  text-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-9 h-9
                  sm:w-10 sm:h-10
                  md:w-12 md:h-12
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                />
              </div>

              <div>
                <h4 className="text-black font-semibold text-[13px] sm:text-[14px] mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[11px] sm:text-[12px] leading-[1.4]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image (Larger now) */}
      <div className="flex-1 flex items-center justify-center w-full">
  <div className="w-full max-w-[800px] sm:max-w-[850px] md:max-w-[900px] overflow-hidden relative rounded-2xl">
    <img
      src={mainImage}
      alt="Main Impact"
      className="w-full h-auto object-contain scale-105 rounded-2xl"
    />
  </div>
</div>

    </section>
  );
};

export default Ourworksupport;
