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
import VideoSection from "./components/VideoSection";
import SuccessStories from "./components/SuccessStories";
import Humanitysection from "./components/Humanitysection";
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


<Humanitysection/>



{/* section4  */}

<CausesSection/>


{/* section */}
<SuccessStories/>




{/* section */}
<FeaturedCampaign/>

<VideoSection/>



    {/* section */}

   <section className="my-16 mb-40">
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
