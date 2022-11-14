import React, { useState } from "react";
import ZigaDescription from "../../ZigaDescription/ZigaDescription";
import validator from "validator";
import classes from "./GeneralStyleForm.module.css";

function CreatePin({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.password) || validator.isEmpty(values.email)) {
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
          <h2>Create a PIN</h2>

          <p className={classes.personalInformation}>
            <small>
              Enter a 4 digit PIN that will be used to authorise
              <br /> transactions.
            </small>
          </p>

          <div className={classes.createPasswordInput}>
            <div className={`${classes.createNewPassword} ${classes.spacing}`}>
              <p className={classes.inputTitle}>Create Password</p>

              <input
                type="password"
                className={`${classes.input} ${classes.inputWidth}`}
                title="please enter your password"
                style={{ border: error ? "2px solid red" : "" }}
                onChange={handleFormData("password")}
                defaultValue={values.password}
              />
              <div className={classes.error}>
                {error ? <p>This is a required field</p> : ""}
              </div>
            </div>

            <div
              className={`${classes.createConfirmPassword} ${classes.spacing}`}
            >
              <p className={classes.inputTitle}>Confirm Password</p>
              <input
                type="password"
                className={`${classes.input} ${classes.inputWidth}`}
                title="please enter your password"
                style={{ border: error ? "2px solid red" : "" }}
                onChange={handleFormData("password")}
                defaultValue={values.password}
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

export default CreatePin;
