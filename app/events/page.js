import Hero2Section from "../components/hero2"
import InsideSection from "../components/InsideSection"
import CampaignSection from "../components/Ongoingcampaign"
import Ongoingcampaign from "../components/Ongoingcampaign"
import Partofchange from "../components/Partofchange"
import PastWorkSection from "../components/slider"
import Upcomingevent from "../components/Upcomingevent"


const page = () => {
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
  return (
    <div>

<Hero2Section
  subtitle="DONATE TODAY"
  title="Your Generosity Changes Lives"
  description="Every donation you give brings food, education, and care to those who need it most. Together, we can create lasting change."
  buttonText="Donate Now"
  buttonLink="/donation"
/>
<section className="flex flex-col lg:flex-row items-stretch justify-between gap-16 px-6 lg:px-20 mt-22">
      
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-end bg-white rounded-lg overflow-hidden">
  <img
    src="/intro.png"
    alt="Mobile hospital"
    className="w-full max-w-[470px] h-auto object-contain"
  />
</div>



      {/* Right Side - Text */}
      <div className="flex-1 flex flex-col justify-between bg-white rounded-lg p-4 lg:p-8 my-20 lg:my-0">
        <div>
          <p className="text-[#E40D11] font-semibold uppercase text-sm mb-1">
            Introduction
          </p>

          <h2 className="text-black font-bold text-2xl lg:text-3xl mb-4">
            Why Our Campaigns Matter
          </h2>

          <p className="text-gray-600 mb-6 leading-6 text-sm">
            Every campaign at Baitussalam UK is built around urgent needs and meaningful impact. From Ramadan food drives and Qurbani programs to emergency relief during crises, these initiatives respond directly to the struggles faced by vulnerable families.
          </p>

          <p className="text-gray-700 leading-6 text-sm">
            Campaigns are more than short-term solutions — they are opportunities for people like you to be part of life-changing moments. Whether it is putting food on a family’s table, helping a child return to school, or providing emergency aid when disaster strikes, your contribution ensures that compassion is transformed into real, measurable change.
          </p>
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


<PastWorkSection/>


<Upcomingevent/>


<Partofchange/>


<InsideSection/>
    </div>
  )
}

export default page