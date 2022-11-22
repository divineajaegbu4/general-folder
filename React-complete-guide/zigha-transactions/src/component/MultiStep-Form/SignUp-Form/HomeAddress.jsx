import React from "react";

import useInput from "../../../hooks/use-input";

import classes from "./GeneralStyleForm.module.css";
import ZigDescription from "../../ZigaDescription/ZigaDescription";

const isNotEmpty = (value) => value.trim() !== "";

function HomeAddress({ nextStep }) {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();

    resetFirstName();
    resetLastName();
    nextStep();
  };

  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigDescription />
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.createPIN}>
          <h2>Home Address</h2>

          <p className={classes.personalInformation}>
            <small>Tell us more about your home address</small>
          </p>

          <div className={classes.createPasswordInput}>
            <div
              className={`${classes.createNewPassword} ${classes.spacing} ${firstNameClasses}`}
            >
              <p className={classes.inputTitle}>Address</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="address"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className={classes.errorText}>Please enter a valid name.</p>
              )}
            </div>
            <div
              className={`${classes.createConfirmPassword} ${classes.spacing} ${lastNameClasses}`}
            >
              <p className={classes.inputTitle}>City</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="text"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className={classes.errorText}>Please enter a city name.</p>
              )}
            </div>

            <div
              className={`${classes.createConfirmPassword} ${classes.spacing} ${lastNameClasses}`}
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
              {lastNameHasError && (
                <p className={classes.errorText}>Please enter a city name.</p>
              )}
            </div>

            <button
              className={classes.createPasswordButton}
              type="submit"
              disabled={!formIsValid}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default HomeAddress;
