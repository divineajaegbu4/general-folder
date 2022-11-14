import React from "react";

import listImage from "../../assests/banner-img.png";
import classes from "./Noodles.module.css";

function Noodles() {
  return (
    <section className={classes.list}>
      <h1 className={classes.headerOrder}>Order Food</h1>
      <div className={classes.order}>
        <p className={classes.textOrder}>
          The Delicious Food app makes it simple for anybody to use a mobile
          device to look over the menu of the best vendors and place an order
          for home delivery.
        </p>
        <img className={classes.imgOrder} src={listImage} alt="food order" />
      </div>
    </section>
  );
}

export default Noodles;
