import React, { useEffect, useState } from "react";
import classes from "./SendForm.module.css";
import Testing from "./testing";
import { FaTimes } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

function Amount({ nextStep, handleChange, values, minute, second }) {
  return (
    <section>
      <div className={classes.header}>
        <div className={classes.mins}>
          <p className={classes.minsRate}>
            The rate is valid for <span>{minute}</span>:<span>{second}</span>
          </p>
        </div>
        <div className={classes.transfer}>
          <h2>How much will you like to transfer</h2>
        </div>
      </div>
      <form className={classes.amount}>
        <div className={classes.inputForm}>
          <div className={`${classes.inputFormNum}`}>
            <input
              type="number"
              defaultValue={values.USD}
              onChange={handleChange("USD")}
            />
            <Testing />
          </div>

          <div className={classes.borderForm}></div>

          <div className={classes.iconsForm}>
            <div className={classes.plusIconForm}>
              <AiOutlinePlus className={classes.iconAmount} />
              <span>
                Rate: <strong>1.00 for 1 USD</strong>
              </span>
            </div>
            <br />
            <div className={classes.timesIconForm}>
              <FaTimes className={classes.iconAmount2} />
              <span>
                Transaction Fee: <strong>00</strong>
              </span>
            </div>
          </div>

          <div className={`${classes.inputFormNum}`}>
            <input
              type="number"
              defaultValue={values.naira}
              onChange={handleChange("naira")}
            />
            <Testing />
          </div>
        </div>

        <button
          className={classes.amountButton}
          type="submit"
          onClick={nextStep}
          disabled={!values.naira || !values.USD}
        >
          Proceed
        </button>
      </form>
    </section>
  );
}

export default Amount;
