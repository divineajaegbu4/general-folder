import React, { useState } from "react";
import validator from "validator";

import classes from "./GeneralStyleForm.module.css";
import ZigaDescription from "../../ZigaDescription/ZigaDescription";

function CreatePassword({ nextStep, handleFormData, values }) {
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
        <div className={classes.createPassword}>
          <h2>Create Password</h2>

          <p className={classes.personalInformation}>
            <small>
              Must include at least 8 characters, an uppercase letter,
              <br /> and a number
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

export default CreatePassword;
