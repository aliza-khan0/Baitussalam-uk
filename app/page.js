import HeroSection from "./components/herosec";
import { FaUtensils, FaChild, FaProjectDiagram,FaGraduationCap, FaUsers } from "react-icons/fa";
import { FaBook, FaHeartbeat, FaLeaf,  FaHandsHelping } from "react-icons/fa";
import InsideSection from "./components/InsideSection";
import SmileSection from "./components/SmileSection";
import Ongoingcampaign from "./components/Ongoingcampaign";

import CausesSection from "./components/CausesSection";
import LearnMoreButton from "./components/ui/learnmore";
import FeaturedCampaign from "./components/Fooddrive";
import CampaignSection from "./components/Ongoingcampaign";
import TransformingSection from "./components/TransformingSection";
export default function HomePage() {
   const campaignsData = [
  {
    img: "/charity1.png",
    title: "Charity Drive",
    desc: "Providing quality learning opportunities",
    date: "June 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
];

  return(

    
     <div className="bg-white text-gray-900">
      
      <HeroSection />

 <>


    
<TransformingSection/>


{/* setion3 */}
{/* ⚪ WHITE SECTION */}
<section className="pt-20 pb-20 px-6 bg-white mt-36">
  <div className="max-w-[1200px] mx-auto grid gap-12 items-center grid-cols-1 md:grid-cols-2">
    {/* Left: Image */}
    <div className="flex justify-center items-center relative">
      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[37rem] lg:h-[37rem] rounded-full overflow-hidden">
        <img
          src="/circleimage.png"
          alt="About Baitussalam"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    {/* Right: Text */}
    <div className="max-w-lg">
      <h5 className="text-red-600 underline decoration-red-600 decoration-2 underline-offset-4 text-sm uppercase mb-3 tracking-wide font-rubik">
        About Baitussalam UK
      </h5>

      <h2 className="font-semibold mb-2 text-gray-900 text-2xl sm:text-3xl md:text-4xl leading-[2.5rem] font-rubik">
        Serving Humanity with Compassion
      </h2>

      <p className="text-gray-600 font-semibold text-sm mb-3 leading-5">
        Who we are, what we stand for, and how we serve communities with
        compassion.
      </p>

      <p className="text-gray-600 text-sm mb-3 leading-5">
        Baitussalam UK is a registered charity dedicated to alleviating
        hardship, empowering individuals, and fostering dignity. Since our
        establishment, we have been actively working to support vulnerable
        families across the UK and beyond.
      </p>

      <p className="text-gray-600 text-sm mb-3 leading-5">
        Rooted in transparency, accountability, and sincerity, we are committed
        to making every donation count. Together, with our supporters and
        volunteers, we transform compassion into action — impacting lives
        globally.
      </p>

      <p className="text-gray-400 text-sm mb-4 leading-5">
        Rooted in transparency, accountability, and sincerity, we are committed
        to making every donation count. Together, with our supporters and
        volunteers, we transform compassion into action — impacting lives
        globally.
      </p>

      <LearnMoreButton
        label="Learn More"
        bgColor="#22305B"
        textColor="#F5F5F5"
        navigateTo="/about"
      />
    </div>
  </div>
</section>


{/* section4  */}

<CausesSection/>


{/* section */}

<section className="relative flex flex-col lg:flex-row items-center justify-center gap-10 py-20 bg-white">
  {/* Left Overlapping Image */}
  <div className="w-full lg:w-auto lg:absolute lg:left-[8%] lg:top-1/2 lg:-translate-y-1/2 z-10 flex justify-center">
    <img
      src="/successstories.png"
      alt="Success Stories"
      className="w-[520px] max-w-full h-[400px] rounded-xl object-cover shadow-lg"
    />
  </div>

  {/* Blue background block (Right Side) */}
  <div className="relative w-full lg:flex-1 bg-[#0a1d3c8a] rounded-tl-[60px] rounded-bl-[60px] p-10 text-white overflow-hidden lg:ml-[28rem] bg-cover bg-center" style={{ backgroundImage: "url('/map.png')" }}>
    {/* Light Blue Overlay */}
    <div className="absolute inset-0 bg-[rgba(10,29,60,0.8)] rounded-tl-[60px] rounded-bl-[60px] z-0"></div>

    {/* Text Content */}
    <div className="relative z-10 pt-11 pb-10 ml-40 text-center lg:text-left">
      <p className="text-[14px] tracking-wider uppercase text-white mb-3 inline-block border-b-2 border-white pb-1">
        Our Impact in Action
      </p>

      <h2 className="text-[27px] font-bold mb-5 leading-[1.3]">
        Success Stories of Hope <br /> and Change
      </h2>

      <p className="text-[13px] leading-6 text-[#D7D6D6] mb-5 max-w-[580px] mx-auto lg:mx-0">
        Behind every donation is a real story of transformation. Families who once
        struggled to meet their basic needs are now rebuilding their lives with
        dignity. Children are attending school, receiving regular meals, and
        dreaming of a brighter future because of your support.
      </p>

      <p className="text-[13px] leading-6 text-[#D7D6D6] mb-8 max-w-[580px] mx-auto lg:mx-0">
        Thanks to Baitussalam UK, my children now have access to education and
        regular meals. This support has given us hope for a brighter tomorrow and
        the strength to move forward.
      </p>

      <button className="bg-[#E40D11] text-white px-7 py-3 rounded-full text-[15px] font-rubik cursor-pointer hover:bg-red-700 transition-colors">
        Donate
      </button>
    </div>
  </div>
</section>




{/* section */}
<FeaturedCampaign/>



    {/* section */}

   <section className="my-16">
  {/* 🔹 IMPACT SECTION */}
  <div className="bg-[#22305B] text-white rounded-tr-[100px] rounded-tl-0 py-16 px-5 text-center mx-auto w-[90%] max-w-[1200px] lg:h-[350px]">
    
    {/* Top Text */}
    <p className="text-[#E40D11] uppercase underline underline-offset-4 decoration-[#BC153F] tracking-wide font-medium mb-2">
      Impact
    </p>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
      The Difference Your Support Makes
    </h2>

    <p className="text-[#B1B1B1] max-w-xl mx-auto mb-12 text-sm sm:text-base">
      Together with our donors and volunteers, we have touched thousands of lives.
    </p>

    {/* Cards Container */}
    <div className="flex flex-wrap justify-center gap-5 lg:justify-between">
      {[
        { img: "/Vector.png", title: "50+ Water Projects" },
        { img: "/cap.png", title: "200+ Children Sponsored" },
        { img: "/child.png", title: "50+ Community Projects" },
        { img: "/family.png", title: "500+ Volunteers" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-[#FBFBFB] text-black rounded-[20px] p-6 sm:p-8 flex-1 min-w-[200px] max-w-[240px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-center border-[5px] border-white h-auto sm:h-[270px] flex flex-col justify-start"
        >
          {/* Pink Circle with Image */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#BC153F] rounded-full flex items-center justify-center mx-auto mb-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            />
          </div>

          <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
          <p className="text-[13px] text-[#666] leading-relaxed">
            Your support helps us reach the most vulnerable through impactful projects.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>





    <CampaignSection
          sectionLabel="Ongoing Campaigns"
          title="Current Campaigns You Can Support"
          subtitle="Your support helps us reach the most vulnerable through impactful projects."
          campaigns={campaignsData}
          buttonText="Donate Now"
        />

      <SmileSection/>

<InsideSection/>










      
     
    </>
     
      
    </div>
  )
   
}
