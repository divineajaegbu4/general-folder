import React, { useState } from "react";
import validator from "validator";

import classes from "./GeneralStyleForm.module.css";
import ZigaDescription from "../../ZigaDescription/ZigaDescription";

function HomeAddress({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.city) || validator.isEmpty(values.address)) {
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
          <h2>Home Address</h2>

          <p className={classes.personalInformation}>
            <small>Tell us more about your home address</small>
          </p>

          <div className={classes.createPasswordInput}>
            <div className={`${classes.createNewPassword} ${classes.spacing}`}>
              <p className={classes.inputTitle}>Address</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="address"
                onChange={handleFormData("address")}
                defaultValue={values.address}
              />
              <div className={classes.error}>
                {error ? <p>This is a required field</p> : ""}
              </div>
            </div>
            <div
              className={`${classes.createConfirmPassword} ${classes.spacing}`}
            >
              <p className={classes.inputTitle}>City</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="text"
                onChange={handleFormData("city")}
                defaultValue={values.city}
              />
              <div className={classes.error}>
                {error ? <p>This is a required field</p> : ""}
              </div>
            </div>

            <div
              className={`${classes.createConfirmPassword} ${classes.spacing}`}
            >
              <p className={classes.inputTitle}>State</p>
              <select>
                <option type="Anambra">Anambra</option>
                <option type="Ogun">Ogun</option>
                <option type="Imo">Imo</option>
                <option type="Owerri">Owerri</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
                <option type="Anambra">Anambra</option>
              </select>
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

export default HomeAddress;
