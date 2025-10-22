import React from 'react'
import SmileSection from '../components/SmileSection'
import InsideSection from '../components/InsideSection'
import ContactForm from '../components/Contactform'
import Hero2Section from '../components/hero2'

const page = () => {
  return (
    <div>

        <Hero2Section
  subtitle="DONATE TODAY"
  title="Serving Humanity With Comapssion"
  description="Every donation you give brings food, education, and care to those who need it most. Together, we can create lasting change."
  
/>
   <section className="relative bg-white text-center overflow-hidden py-16 sm:py-20 px-4 sm:px-12 font-sans">

  {/* Left Blue Background */}
  <div className="absolute top-[65%] left-0 transform -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-[#22305B] rounded-tr-[60px] rounded-br-[60px] z-0"></div>

  {/* Right Blue Background */}
  <div className="absolute top-[65%] right-0 transform -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-[#22305B] rounded-tl-[60px] rounded-bl-[60px] z-0"></div>

  {/* Headings */}
  <div className="text-[#E40D11] uppercase text-[12px] sm:text-[14px] tracking-wide mb-2 sm:mb-3 underline decoration-[#BC153F] decoration-2 underline-offset-2">
    OUR VALUES
  </div>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
    The Principles We Live By
  </h2>

  <p className="text-[12px] sm:text-sm text-black mb-12 sm:mb-16 max-w-xl sm:max-w-2xl mx-auto">
    Our work is built on principles that ensure trust, fairness, and meaningful impact.
  </p>

  {/* Cards */}
  <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
    {[
      { img: "/location.png", title: "Address", text: "Baitussalam UK, [Insert Office Address]" },
      { img: "/call1.png", title: "Phone", text: "Baitussalam UK, [Insert Office Address]" },
      { img: "/email1.png", title: "Email", text: "info@baitussalam.org.uk" },
      { img: "/accounts.png", title: "Accountability", text: "Monday – Friday | 9:00 AM – 5:00 PM" }
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#FBFBFB] shadow-md rounded-[15px] w-52 sm:w-56 md:w-60 h-48 sm:h-52 md:h-52 p-4 sm:p-6 text-center flex flex-col items-center justify-center"
      >
        <div className="bg-[#b2173f] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <img src={item.img} alt={item.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
        </div>
        <div className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</div>
        <div className="text-[10px] sm:text-[12px] text-gray-500">{item.text}</div>
      </div>
    ))}
  </div>
</section>

<section className="bg-white font-rubik py-20 px-4 md:px-8 lg:px-20 flex flex-wrap justify-center items-stretch gap-8">
      
      {/* Left side — Form */}
      <div className="flex-1 min-w-[300px] max-w-[580px] bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-black text-2xl md:text-3xl font-bold mb-3">
          Get in Touch With Us
        </h2>
        <p className="text-gray-600 text-sm mb-6 leading-snug">
          We’re here to answer your questions, support your journey, and work together in making a difference. We’re here to answer your questions, support your journey, and work together in making a difference.
        </p>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Right side — Google Map */}
      <div className="flex-1 min-w-[300px] max-w-[500px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0394393065326!2d67.05778807426402!3d24.862502545177858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc4330000d7%3A0x392be2a6cc28669b!2sBidec%20Solution's%20(pvt)%20Ltd!5e0!3m2!1sen!2s!4v1760956168148!5m2!1sen!2s"
          width="100%"
          height="100%"
          className="min-h-[400px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>



<SmileSection/>


<InsideSection/>
    </div>
  )
}

export default page