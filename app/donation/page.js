import React from 'react'
import Hero2Section from '../components/hero2'
import ZakatCalculatorSection from '../components/Zakatcalculator'
import InsideSection from '../components/InsideSection'
import Ongoingcampaign from '../components/Ongoingcampaign'
import CampaignSection from '../components/Ongoingcampaign'

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
                
                
              />

              <ZakatCalculatorSection/>

              <CampaignSection
      sectionLabel="Ongoing Events"
      title="Support a Cause That Matters"
      subtitle="Choose from our active campaigns and directly impact lives in nee."
      campaigns={campaignsData}
      buttonText="Donate Now"
    />

              <InsideSection/>
    </div>
  )
}

export default page