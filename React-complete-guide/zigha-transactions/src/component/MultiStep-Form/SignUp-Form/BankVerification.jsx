import React, { useState } from "react";
import validator from "validator";

import classes from "./GeneralStyleForm.module.css";
import ZigaDescription from "../../ZigaDescription/ZigaDescription";

function BankVerification({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.password)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigaDescription />
      </div>
      <form onSubmit={submitFormData}>
        <div className={classes.createPIN}>
          <h2>Bank Verification Number</h2>

          <p className={classes.personalInformation}>
            <small>Tell us more about your business</small>
          </p>

          <div className={classes.createPasswordInput}>
            <div className={`${classes.createNewPassword} ${classes.spacing}`}>
              <p className={classes.inputTitle}>BVN</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="password"
                defaultValue={values.password}
                onChange={handleFormData("password")}
              />
              <div className={classes.error}>
                {error ? <p>This is a required field</p> : ""}
              </div>
            </div>

            <button className={classes.createPasswordButton} type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default BankVerification;
