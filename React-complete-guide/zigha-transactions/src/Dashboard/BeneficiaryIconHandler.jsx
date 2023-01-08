import React, { useState } from "react";
import classes from "./Beneficiary.module.css";

function BeneficiaryIconHandler() {
  const [appState, setAppSet] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  });

  const toggleActive = (index) => {
    setAppSet({ ...appState, activeObject: appState.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    if (appState.objects[index] === appState.activeObject) {
      return `${classes.box} ${classes.active}`;
    } else {
      return `${classes.box} ${classes.inactive}`;
    }
  };
  return (
    <div className={classes.app}>
      {appState.objects.map((elements, index) => (
        <div
          key={index}
          className={toggleActiveStyles(index)}
          onClick={() => {
            toggleActive(index);
          }}
        ></div>
      ))}
    </div>
  );
}

export default BeneficiaryIconHandler;
