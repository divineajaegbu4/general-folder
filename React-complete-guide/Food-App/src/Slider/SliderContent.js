import React from "react";
import "./SliderContent.css";

function SliderContent({ activeIndex, imageSlider }) {
  return (
    <div>
      {imageSlider.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default SliderContent;
