import React from "react";

import { FcPrevious, FcNext } from "react-icons/fc";
import classes from "./Arrow.module.css";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className={classes.icons}>
      <FcPrevious onClick={nextSlide} />
      <FcNext onClick={prevSlide} className={classes.clickIcon} />
    </div>
  );
}

export default Arrows;
