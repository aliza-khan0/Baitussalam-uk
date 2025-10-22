"use client";
import React from "react";

const TransformingSection = () => {
  const dropdowns = [
    ["Services", ["Education", "Healthcare"]],
    ["Program", ["Monthly", "Yearly"]],
    ["Single Payment", ["Recurring"]],
    ["$100", ["$250", "$500"]],
    ["Sadaqah", ["Zakat", "Donation"]],
  ];

  const stats = [
    { img: "/img1.png", title: "5000+ Meals", desc: "distributed annually" },
    { img: "/img2.png", title: "1200+ Children", desc: "supported with education" },
    { img: "/img3.png", title: "50+ Community", desc: "projects launched" },
    { img: "/img4.png", title: "100+ Volunteers", desc: "engaged" },
  ];

  return (
    <section style={{
      position: "relative",
      backgroundImage: "url('/sec2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
      color: "white",
      padding: "6rem 1rem 10rem", // more bottom padding for stats
      borderBottom: "3px solid #BC153F",
      overflow: "visible"
    }}>
      {/* Blue Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(34, 48, 91, 0.96)",
        zIndex: 1
      }}></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          padding: "0 1rem",
          marginBottom: "1.5rem"
        }}>
          {dropdowns.map(([label, options], i) => (
            <select key={i} style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.5rem 2rem 0.5rem 1rem",
              borderRadius: "14px",
              textAlign: "center",
              outline: "none",
              border: "1px solid #ccc",
              cursor: "pointer",
              minWidth: "120px",
              appearance: "auto"
            }}>
              <option>{label}</option>
              {options.map((opt, j) => (
                <option key={j}>{opt}</option>
              ))}
            </select>
          ))}
          <button style={{
            backgroundColor: "#BC153F",
            color: "white",
            padding: "0.5rem 1.5rem",
            borderRadius: "9999px",
            fontWeight: 400,
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontFamily: "Rubik, sans-serif",
          }}>
            Donate Now
          </button>
        </div>

        <h3 style={{
          fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
          padding: "1rem 0",
          fontWeight: 600,
          fontFamily: "Rubik, sans-serif",
          color: "white"
        }}>
          Transforming Lives Through Your Support
        </h3>
      </div>

      {/* Stats Circles */}
      <div className="stats-container" style={{
        position: "absolute",
        left: "50%",
        bottom: "-100px",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        textAlign: "center",
        zIndex: 3,
        flexWrap: "nowrap"
      }}>
        {stats.map((item, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            minWidth: "120px"
          }}>
            <div style={{
              width: "clamp(80px, 12vw, 128px)",
              height: "clamp(80px, 12vw, 128px)",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              overflow: "hidden",
              border: "2px solid #BC153F"
            }}>
              <img src={item.img} alt={item.title} style={{
                width: "50%",
                height: "50%",
                objectFit: "contain"
              }} />
            </div>
            <p style={{
              fontWeight: 600,
              fontSize: "1rem",
              marginTop: "0.75rem",
              color: "black",
              lineHeight: 1.3
            }}>
              {item.title}<br/>
              <span style={{ fontWeight: 500, fontSize: "0.9rem", color: "black" }}>{item.desc}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Responsive adjustments */}
     <style jsx>{`
  @media (max-width: 1024px) {
    .stats-container {
      position: absolute;        /* stays above overlay */
      left: 50%;
      top: 70%;                  /* adjust this value to start below heading */
      transform: translateX(-50%);
      flex-direction: column;    /* stack vertically */
      align-items: center;
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .stats-container {
      top: 39%;                  /* fine-tune for smaller screens */
    }
    .stats-container > div {
      min-width: 100px;
    }
  }
`}</style>


    </section>
  );
};

export default TransformingSection;
