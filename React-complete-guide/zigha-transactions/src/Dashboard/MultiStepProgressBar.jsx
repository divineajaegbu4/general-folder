import React, { useState } from "react";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import classes from "./SendForm.module.css";

const MultiStepProgressBar = (props) => {

  let stepPercentage = 0;

  if (props.step === 1) {
    stepPercentage = 0;
  } else if (props.step === 2) {
    stepPercentage = 32.1;
  } else if (props.step === 3) {
    stepPercentage = 67;
  } else if (props.step === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div className={classes.multiStepProgress}>
      <div className={classes.progressBar}>
        <ProgressBar
          percent={stepPercentage}
          filledBackground="#000000"
          height="2px"
          width="500px"
        >
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`${classes.indexedStep} ${
                  accomplished ? classes.accomplished : null
                }`}
              ></div>
            )}
          </Step>

          <Step>
            {({ accomplished, index }) => (
              <div
                className={`${classes.indexedStep} ${
                  accomplished ? classes.accomplished : null
                }`}
              ></div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`${classes.indexedStep} ${
                  accomplished ? classes.accomplished : null
                }`}
              ></div>
            )}
          </Step>

          <Step>
            {({ accomplished, index }) => (
              <div
                className={`${classes.indexedStep} ${
                  accomplished ? classes.accomplished : null
                }`}
              ></div>
            )}
          </Step>
        </ProgressBar>
      </div>
      <div className={classes.progressView}>
       <p className={classes.progress1}>Amount</p>
       <p className={classes.progress2}>Beneficiary</p>
       <p className={classes.progress3}>Review</p>
       <p className={classes.progress4}>Sent</p>
    </div>
    </div>
  );
};

export default MultiStepProgressBar;
