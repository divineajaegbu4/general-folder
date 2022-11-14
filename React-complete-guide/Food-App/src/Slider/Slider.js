import React, { useState } from "react";
import SliderContent from "./SliderContent";
import SliderImage from "./Image";
import Arrows from "./Arrows";

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <div>
      <Arrows />
      <SliderContent activeIndex={activeIndex} imageSlider={SliderImage} />
    </div>
  );
}

export default Slider;
