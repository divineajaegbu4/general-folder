import React from "react";
import FoodChoice from "./FoodChoice/FoodChoice";
import FoodText from "./FoodText";
import Slider from "./Slider/Slider";
import Header from "./FoodHeader/Header";
import Footer from "./Footer/Footer";

function ContainerFunc() {
  return (
    <div>
      <Header />
      <Slider />
      <FoodText />
      <FoodChoice />
      <Footer />
    </div>
  );
}

export default ContainerFunc;
