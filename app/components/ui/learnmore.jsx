"use client";

import { useRouter } from "next/navigation";

export default function LearnMoreButton({
  label = "Learn More",      // 🔹 default text
  bgColor = "transparent",   // 🔹 default background
  textColor = "white",       // 🔹 default text color
  hoverColor,                // 🔹 hover background color
  navigateTo,                // 🔹 navigation path
  onClickAction,             // 🔹 custom function
  borderColor = "transparent", // 🔹 default border color
  borderWidth = "1px",         // 🔹 border thickness
  borderStyle = "solid",       // 🔹 solid / dashed / dotted
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClickAction) {
      onClickAction();
    } else if (navigateTo) {
      router.push(navigateTo);
    } else {
      console.warn("⚠️ No action defined for LearnMoreButton");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "9px 27px",
        borderRadius: "9999px",
        border: `${borderWidth} ${borderStyle} ${borderColor}`,
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "500",
        fontSize: "11.5px",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor || bgColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
      }}
    >
      {label}
    </button>
  );
}
