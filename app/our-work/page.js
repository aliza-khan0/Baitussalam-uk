import React from 'react'
import CausesSection from '../components/CausesSection'
import InsideSection from '../components/InsideSection'
import Partofchange from '../components/Partofchange'
import Storiessection from '../components/StoriesSection'
import Ourworksupport from '../components/Ourworksupport'
import Hero2Section from '../components/hero2'

const page = () => {
  return (
    <div>
        <Hero2Section
                subtitle="OUR WORK"
                title=" Serving Humanity with Compassion "
                description="Baitussalam UK (Charity No. 1208852) is dedicated to turning compassion into action by empowering vulnerable communities through education, healthcare, food security, and long-term support."
                
                
              />

     
   <section className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-12 px-4 sm:px-12 py-20 mt-24">

  {/* Left Side - Image */}
 <div className="flex-1 flex items-center justify-center bg-white overflow-hidden">
  <img
    src="/ourwork.png"
    alt="Mobile hospital"
    className="w-full object-contain"
  />
</div>

  {/* Right Side - Text */}
  <div className="flex-1 flex flex-col justify-between bg-white rounded-lg p-4 sm:p-6 lg:p-8">
    <div>
      <p className="text-[#E40D11] font-semibold uppercase text-[12px] sm:text-sm mb-1 sm:mb-2">
        Introduction
      </p>

      <h2 className="text-[#22305B] font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
        Building Hope, Creating Change
      </h2>

      <p className="text-gray-600 text-[12px] sm:text-sm leading-relaxed mb-4 sm:mb-6">
        At Baitussalam UK, we believe compassion must be more than just words — it should be
        lived and experienced through meaningful action. From the moment you engage with our
        work, you can see and feel the difference your support creates — a child walking into
        a classroom, a family receiving food with dignity, or a patient finding hope in
        healthcare they couldn’t afford.
      </p>

      <p className="text-gray-600 text-[12px] sm:text-sm leading-relaxed mb-6 sm:mb-8">
        At Baitussalam UK, we believe compassion must be more than just words — it should be
        lived and experienced through meaningful action. From the moment you engage with our
        work, you can afford.
      </p>

      {/* Bullet Points with Image in Blue Circle */}
      <div className="space-y-4 mb-8">
        {[
          {
            img: "/tick.png",
            title: "Immediate Relief",
            desc: "Timely support in food, healthcare, and emergency aid when needed.",
          },
          {
            img: "/tick.png",
            title: "Community Development",
            desc: "Sustainable programs that empower individuals and families long term.",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* Blue Circle with Image */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#22305B] flex items-center justify-center">
  <img
    src={item.img}
    alt="Icon"
    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain filter invert"
  />
</div>



            {/* Text */}
            <div>
              <p className="text-[#22305B] font-semibold text-sm sm:text-base">{item.title}</p>
              <p className="text-gray-600 text-[11px] sm:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer Info */}
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <div className="flex items-center border border-[#E40D11] rounded-lg px-3 py-2 gap-4">
        <p className="text-black text-2xl font-bold">08</p>
        <p className="text-sm text-black">years of <br/> Experience</p>
      </div>

      <div>
        <img src="/logo.png" alt="Baitussalam Logo" className="w-32 sm:w-36 h-auto" />
      </div>
    </div>
  </div>
</section>








    <CausesSection/>

     <Storiessection/>

<Ourworksupport/>

    <Partofchange/>

<InsideSection/>
    </div>
  )
}

export default page