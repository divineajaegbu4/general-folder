import React, { useState } from "react";

import classes from "./GeneralStyleForm.module.css";
import useInput from "../../../hooks/use-input";
import ZigDescription from "../../ZigaDescription/ZigaDescription";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim().includes("@");
const isNumber = (value) => value.trim().length === 5;


function BusinessDetails({ nextStep }) {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);


  const {
    value: emailNameValue,
    hasError: emailNameHasError,
    isValid: emailNameIsValid,
    valueChangeHandler: emailNameChangeHandler,
    inputBlurHandler: emailNameBlurHandler,
    reset: resetEmailName,
  } = useInput(isEmail);

  const {
    value: numberNameValue,
    hasError: numberNameHasError,
    isValid: numberNameIsValid,
    valueChangeHandler: numberNameChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumberName,
  } = useInput(isNumber);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    emailNameIsValid &&
    numberNameIsValid
  ) {
    formIsValid = true;
  } 

  const firstNameClasses = firstNameHasError
  ? `${classes.formControl} ${classes.invalid}`
  : "form-control";



const emailNameClasses = emailNameHasError
  ? `${classes.formControl} ${classes.invalid}`
  : "form-control";


  const numberNameClasses = numberNameHasError
  ? `${classes.formControl} ${classes.invalid}`
  : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();


    resetFirstName();
    resetEmailName();
    resetNumberName();
    nextStep();
  };
  
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigDescription />
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.createPIN}>
          <h2>Business Details</h2>

          <p className={classes.personalInformation}>
            <small>Tell us more about your business</small>
          </p>

          <div className={classes.createPasswordInput}>
            <div className={`${classes.createNewPassword} ${classes.spacing} ${firstNameClasses} `}>
              <p className={classes.inputTitle}>Business Name</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="text"
                title="enter your business name"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className={classes.errorText}>Please enter a first name.</p>
              )}
            </div>

            <div
              className={`${classes.createConfirmPassword} ${classes.spacing} ${emailNameClasses} `}
            >
              <p className={classes.inputTitle}>Business Email</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="email"
                title="enter your business name"
                value={emailNameValue}
                onChange={emailNameChangeHandler}
                onBlur={emailNameBlurHandler}
              />
              {emailNameHasError && (
                <p className={classes.errorText}>
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div
              className={`${classes.createConfirmPassword} ${classes.spacing}  ${numberNameClasses}`}
            >
              <p className={classes.inputTitle}>CAC Number</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="number"
                title="enter your business name"
                value={numberNameValue}
                onChange={numberNameChangeHandler}
                onBlur={numberBlurHandler}
              />

              {numberNameHasError && (
                <p className={classes.errorText}>
                  Please enter a valid number.
                </p>
              )}
            </div>

            <button className={classes.createPasswordButton} type="submit"  disabled={!formIsValid}>
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default BusinessDetails;
