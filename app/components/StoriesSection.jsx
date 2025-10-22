import React from "react";

const Storiessection = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 sm:px-8 py-12 sm:py-16 mt-16 bg-white">
      {/* Gray background box behind images */}
      <div className="absolute top-[120px] bottom-[59px] right-0 left-1/3 bg-gray-100 rounded-l-[20px] z-0 hidden lg:block"></div>

      {/* Left Image */}
      <div className="relative z-10 flex justify-center lg:justify-start w-full lg:w-[490px] h-[300px] sm:h-[400px] lg:h-[500px]">
        <img
          src="/stories.png"
          alt="Building"
          className="w-full h-full rounded-[55px] shadow-md object-cover ml-0 lg:ml-2"
        />
      </div>

      {/* Right Text */}
      <div className="relative z-10">
        <p className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-1.5 underline decoration-[#BC153F] decoration-2 underline-offset-2 pt-8 sm:pt-16">
          Stories
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Lives Touched by Your Support
        </h2>

        <p className="text-gray-600 leading-[1.3] mb-4 text-[12.5px] sm:text-sm font-rubik">
          Amina is a widowed mother of three who lives in a small village where work is scarce and food is often a luxury. As Ramadan approached, she worried about how she would feed her children at suhoor and iftar. Most days, she would skip meals herself so her children could have a little to eat, but even that was never enough.
        </p>

        <p className="text-gray-600 leading-[1.3] mb-4 text-[12.5px] sm:text-sm font-rubik">
          When our volunteers reached her home with a Ramadan Food Parcel, her eyes filled with tears. For the first time in months, she felt relief knowing her children would eat properly and with dignity. The parcel contained rice, flour, lentils, cooking oil, and dates — essentials that would sustain them for the entire month.
        </p>

        <p className="text-gray-600 leading-[1.3] text-[12.5px] sm:text-sm font-rubik">
          Amina shared, “I had no idea how we would survive this Ramadan. Your help has given us not just food, but hope. May Allah bless those who made this possible.”
        </p>
      </div>
    </section>
  );
};

export default Storiessection;
