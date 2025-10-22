import React from 'react';

const Partofchange = () => {
  return (
    <section className="relative bg-black bg-cover bg-center text-white h-[300px] flex items-center justify-center px-6">
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center px-4">
        <h2 className="text-4xl font-semibold mb-4">
          Be Part of the Change
        </h2>

        <p className="text-gray-200 text-sm mb-6">
          Your support makes everything possible. Whether you donate, volunteer, or partner with us, together we can create lasting impact.
        </p>

        <button className="bg-[#BC153F] text-white px-6 py-3 rounded-lg text-base border-none cursor-pointer transition-colors hover:bg-red-700">
          Donate Now
        </button>
      </div>

    </section>
  );
};

export default Partofchange;
