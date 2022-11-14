import React from "react";

import classes from "./viewFoodSites.module.css";

function ViewFoodSites(props) {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openNewTabHandler = () => {
    openNewTab("https://dado.ng/");
  };

  const seperator = (props) => {
    let str = props.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  const viewItems = props.showImageDetails.map((showImageDetail, index) => {
    return (
      <div key={index} className={classes.scale}>
        <img
          className={classes.image}
          src={showImageDetail.image}
          alt="different delicious food"
        />
        <div className={classes.icons}>
          <div className={classes.positionIcon}>
            <span className={classes.appleIcon} onClick={openNewTabHandler}>
              {showImageDetail.iconHeart}
            </span>
            <span className={classes.cartIcon}>{showImageDetail.icon}</span>
            <span className={classes.naira}>
              {seperator(showImageDetail.naira)}
            </span>
          </div>
        </div>
        <div className={classes.foodName}>{showImageDetail.name}</div>
      </div>
    );
  });

  return (
    <div>
      <h1 className={classes.hourDeal}>View Happy Hour Deal</h1>
      <div className={classes.container}>{viewItems}</div>
    </div>
  );
}

export default ViewFoodSites;
