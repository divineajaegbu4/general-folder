import React from "react";

import SignupIcon from "../MultiStep-Form/SignUp-Form/SignupIcon";
import classes from "./ZigaDescription.module.css";

function ZigaDescription() {
  return (
    <section className={classes.container}>
      <div className={classes.containerZigaDescription}>
        <div className={classes.logo}>
          <SignupIcon />
        </div>
        <div className={classes.textDescription}>
          <h2>
            Move money across different countries
            <br /> swiftly & securely
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ZigaDescription;
