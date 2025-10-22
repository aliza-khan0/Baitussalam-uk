"use client";
import React, { useState } from "react";

const Upcomingevent = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const campaigns = [
    {
      img: "/charity1.png",
      title: "Charity Drive",
      desc: "Free medical check-ups, medicine distribution, and health awareness sessions for underprivileged communities. Help us extend healthcare access to those who need it most.",
      location: "Karachi",
      locationDesc: "Helping local communities in need.",
      date: "June 2025",
      dateDesc: " 12th June, 2025",
    },
    {
      img: "/ramadan2.png",
      title: "Community Iftar",
      desc: "Free medical check-ups, medicine distribution, and health awareness sessions for underprivileged communities. Help us extend healthcare access to those who need it most.",
      location: "Lahore",
      locationDesc: "Downtown Iftar arrangements.",
      date: "April 2025",
      dateDesc: "Evening of 15th April, 2025",
    },
    {
      img: "/charity2.png",
      title: "Volunteer Orientation",
      desc: "Free medical check-ups, medicine distribution, and health awareness sessions for underprivileged communities. Help us extend healthcare access to those who need it most.",
      location: "Islamabad",
      locationDesc: "Orientation session for new volunteers.",
      date: "May 2025",
      dateDesc: " 22nd May, 2025",
    },
    {
      img: "/education.png",
      title: "Education Support",
      desc: "Free medical check-ups, medicine distribution, and health awareness sessions for underprivileged communities. Help us extend healthcare access to those who need it most.",
      location: "Hyderabad",
      locationDesc: "School supplies distribution event.",
      date: "July 2025",
      dateDesc: " 5th July, 2025",
    },
    
    {
      img: "/charity2.png",
      title: "Volunteer Orientation",
      desc: "Free medical check-ups, medicine distribution, and health awareness sessions for underprivileged communities. Help us extend healthcare access to those who need it most.",
      location: "Islamabad",
      locationDesc: "Orientation session for new volunteers.",
      date: "May 2025",
      dateDesc: " 22nd May, 2025",
    },
    {
      img: "/charity2.png",
      title: "Volunteer Orientation",
      desc: "Free medical check-ups, medicine distribution, and health awareness sessions for underprivileged communities. Help us extend healthcare access to those who need it most.",
      location: "Islamabad",
      locationDesc: "Orientation session for new volunteers.",
      date: "May 2025",
      dateDesc: " 22nd May, 2025",
    },
   
    
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Section Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p
          style={{
            color: "#E40D11",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "8px",
            textDecoration: "underline",
            textDecorationColor: "#BC153F",
            textUnderlineOffset: "6px",
          }}
        >
          Upcoming Events
        </p>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "10px" }}>
          Join Our Upcoming Events
        </h2>
        <p style={{ maxWidth: "420px", fontSize: "13px", color: "#555", margin: "0 auto" }}>
          Your support helps us reach the most vulnerable through impactful projects.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px",
        }}
      >
        {campaigns.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              borderTopLeftRadius:"15px",
              borderTopRightRadius:"15px",
              borderBottomRightRadius:"15px",
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left",
              
            }}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <div style={{ padding: "20px", backgroundColor: "#F9F9F9", flexGrow: 1 }}>
              <h3 style={{ fontSize: "19px", marginBottom: "6px" }}>{item.title}</h3>
              <p style={{ fontSize: "11px", color: "#555", marginBottom: "10px", lineHeight: "1.4" }}>
                {item.desc}
              </p>

              {/* Location & Date Row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "2px",
                }}
              >
                <div>
                  <h5
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#5C5C5C",
                      marginBottom: "3px",
                    }}
                  >
                    {item.location}
                  </h5>
                  <p style={{ fontSize: "11px", color: "#5C5C5C", margin: "0" }}>
                    {item.locationDesc}
                  </p>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h5
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#5C5C5C",
                      marginBottom: "3px",
                    }}
                  >
                    {item.date}
                  </h5>
                  <p style={{ fontSize: "11px", color: "#666", margin: "0" }}>{item.dateDesc}</p>
                </div>
              </div>
            </div>

            {/* Button at the bottom */}
            <div style={{backgroundColor:"#F9F9F9"}}>
              <button
                style={{
                  backgroundColor: "#22305B",
                  color: "white",
                  padding: "8px 26px",
                  border: "none",
                  borderBottomRightRadius:"8px",
                  borderTopRightRadius:"8px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < campaigns.length && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={handleLoadMore}
            style={{
              backgroundColor: "#BC153F",
              color: "white",
              padding: "8px 28px",
              border: "none",
              borderRadius: "14px",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Upcomingevent;
