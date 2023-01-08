import React from "react";
import { SentSvg } from "./OnSvgForm";
import classes from "./Beneficiary.module.css";

function Sent() {
  return (
    <div className={classes.sentContainer}>
      <div className={classes.sentIcon}>
        <SentSvg />
      </div>
      <div className={classes.sentSuccessful}>
        <h2>Successful</h2>
        <p>
          Processing your transaction
          <br />
          it will be completed in 24 hours.
        </p>
      </div>
      <div className={classes.sentButton}>
        <button>Done</button>
      </div>
    </div>
  );
}

export default Sent;
