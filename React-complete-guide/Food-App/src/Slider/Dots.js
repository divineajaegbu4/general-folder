import React from "react";

import "./Dots.css";

function Dots({ activeIndex, onclickHandler, imageSlider }) {
  return (
    <div className="all-dots">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclickHandler(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
