"use client";

export default function VisionSection({
  smallButtonText = "Campaign Specific",
  subTitle = "Vision",
  title = "Our Vision",
  paragraphs = [
    "Our vision is to build a world where dignity, opportunity, and compassion are not privileges but rights enjoyed by every human being. We aspire to create a future where children have access to quality education, families no longer suffer from hunger, and healthcare is accessible to all, regardless of their financial situation.",
    "We envision societies that are resilient in times of crisis, empowered through knowledge, and supported by sustainable systems that uplift entire communities. With a focus on both immediate relief and long-term development, our vision extends beyond charity — it is about fostering environments of fairness, inclusivity, and shared prosperity.",
    "Ultimately, we see a future where humanity stands united in service and care, ensuring that generations to come inherit a world rooted in justice, kindness, and hope."
  ],
  largeImage = "/vision.png",
}) {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-white overflow-hidden px-6 sm:px-12 lg:px-[120px] py-12 sm:py-16 lg:py-[100px]">
      
      {/* LEFT SIDE - TEXT */}
      <div className="flex-1 max-w-full lg:max-w-[700px]">
        <button className="border border-gray-500 rounded-lg px-3 py-2 mb-6 text-gray-500 text-sm sm:text-base">
          {smallButtonText}
        </button><br/>

        <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 inline-block border-b-2 border-[#BC153F] pb-1">
          {subTitle}
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-6">
          {title}
        </h2>

        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-[11px] sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 last:mb-6">
            {para}
          </p>
        ))}
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex-1 relative flex justify-center items-center mt-8 lg:mt-0 lg:ml-0 lg:ml-[80px]">
        <div className="relative w-full max-w-[600px] sm:max-w-[700px] h-auto flex justify-center items-center">
          <img
            src={largeImage}
            alt="Vision"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

    </section>
  );
}
