"use client";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="bg-white py-16 text-center">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-[#BC153F] uppercase text-sm tracking-wide border-b-2 border-[#BC153F] inline-block pb-1 mb-2">
          Trust & Transparency
        </p>

        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">
          Your Trust Matters Donate with Confidence Today
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-xs leading-relaxed">
          Amina shared, “I had no idea how we would survive this Ramadan. Your
          help has given us not just food, but hope. May Allah bless those who
          made this possible.”
        </p>
      </div>

      {/* Cards Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
  {/* Card 1 */}
  <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px] mb-6">
    <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full ">
      <Image
        src="/ribbon.png"
        alt="Registered Charity"
        width={70}
        height={70}
        className="object-contain invert brightness-0"
      />
    </div>
    <div className="text-left p-4">
      <h3 className="font-semibold text-gray-900 text-base">
        Registered Charity
      </h3>
      <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
  Every penny of your Zakat reaches those who are eligible.
</p>

    </div>
  </div>

  {/* Card 2 */}
  <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px]">
    <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full">
      <Image
        src="/process.png"
        alt="Regular Updates"
        width={70}
        height={70}
        className="object-contain invert brightness-0"
      />
    </div>
    <div className="text-left p-4">
      <h3 className="font-semibold text-gray-900 text-base">
        100% Zakat Policy
      </h3>
      <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
  Every penny of your Zakat reaches those who are eligible.
</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px]">
    <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full">
      <Image
        src="/process.png"
        alt="Regular Updates"
        width={70}
        height={70}
        className="object-contain invert brightness-0"
      />
    </div>
    <div className="text-left p-4">
      <h3 className="font-semibold text-gray-900 text-base">
        Regular Updates
      </h3>
      <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
  Every penny of your Zakat reaches those who are eligible.
</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px]">
    <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full">
      <Image
        src="/key.png"
        alt="Secure Giving"
        width={70}
        height={70}
        className="object-contain invert brightness-0"
      />
    </div>
    <div className="text-left p-4">
      <h3 className="font-semibold text-gray-900 text-base">Secure Giving</h3>
      <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
  Every penny of your Zakat reaches those who are eligible.
</p>
    </div>
  </div>
</div>

      
    </section>
  );
}
