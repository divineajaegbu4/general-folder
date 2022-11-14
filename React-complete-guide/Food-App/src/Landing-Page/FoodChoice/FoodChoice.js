import React from "react";
import { NavLink } from "react-router-dom";

import { FoodData } from "./FoodData";
import "./FoodChoice.css";

function FoodChoice() {
  const seperator = (props) => {
    var str = props.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  const viewFoodChoice = FoodData.map((food, index) => {
    return (
      <div key={index} className="food-images">
        <img src={food.image} alt="Delicious food" className="food-choice" />
        <div className="icons icons--blur icons--primary">
          <div className="position-icon">
            <span>
              <NavLink className="cart-icon" to="/auth-page">
                {food.icon}
              </NavLink>
            </span>
            <span>
              <a
                className="apple-icon"
                href="https://www.istockphoto.com/search/2/image?phrase=nigerian+food"
              >
                {food.iconHeart}
              </a>
            </span>
            <br />
            <span className="naira">{seperator(food.naira)}</span>
          </div>
        </div>
        <span className="food-name">{food.name}</span>
      </div>
    );
  });

  return <div className="food__choice--container">{viewFoodChoice}</div>;
}
export default FoodChoice;
