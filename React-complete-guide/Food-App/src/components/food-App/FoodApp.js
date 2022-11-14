import React from "react";
import banner from "../../assests/mobile.gif";
import classes from "./FoodApp.module.css";

function FoodApp() {
  return (
    <section className={classes.general}>
      <h1 className={classes.headerDelivery}>
        Enjoy food delivery from restaurants in Lagos
      </h1>
      <div className={classes.containerApp}>
        <p className={classes.para}>
          Lagos, the great commercial capital of Nigeria is a home to many and
          one of the fastest growing cities in the world. Thankfully, it also
          harbors a vibrant culinary scene with many bars and restaurants; each
          one with their very own style of cuisine from all over the world.
          Which means restaurants in Lagos combine a large amount of food and
          cuisine options from around the world. There are plenty of options
          available for food delivery in Lagos with traditional African food and
          many offering the best in Nigerian foods that provide the next best
          thing to a home cooked meal.
        </p>
        <img className={classes.img} src={banner} alt="Food delivery" />
      </div>
    </section>
  );
}

export default FoodApp;
