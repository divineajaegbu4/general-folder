import React from "react";

import ZigDescription from "../../ZigaDescription/ZigaDescription";
import classes from "./GeneralStyleForm.module.css";
import { Link } from "react-router-dom";

import useInput from "../../../hooks/use-input";
import { auth } from "../../../hooks/firebase";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim().includes("@");
const isNumber = (value) => value.trim().length === 11;

const SignUpForm = ({ nextStep }) => {

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
    lastNameIsValid &&
    emailNameIsValid &&
    numberNameIsValid
  ) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const lastNameClasses = lastNameHasError
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

    auth
      .createUserWithEmailAndPassword(emailNameValue, numberNameValue)
      .then((auth) => {
        if (auth) {
          resetFirstName();
          resetLastName();
          resetEmailName();
          resetNumberName();
          nextStep();
        }
      }) .catch((error) => alert("Authentication failed!"));
    
  };
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigDescription />
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.createAccount}>
          <h2>Create Account</h2>
          <p className={classes.personalInformation}>
            <small>Use your personal information</small>
          </p>
          <div className={classes.containerFormInput}>
            <div
              className={`${classes.firstName} ${classes.inputName} ${firstNameClasses} `}
            >
              <p className={classes.inputTitle}>First Name</p>
              <input
                type="text"
                id="name"
                className={classes.input}
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className={classes.errorText}>Please enter a first name.</p>
              )}
            </div>

            <div
              className={`${classes.LastName} ${classes.inputName} ${lastNameClasses}`}
            >
              <p className={classes.inputTitle}>Last Name</p>
              <input
                type="text"
                id="name"
                className={classes.input}
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className={classes.errorText}>Please enter a last name.</p>
              )}
            </div>

            <div
              className={`${classes.number} ${classes.inputName} ${numberNameClasses}`}
            >
              <p className={classes.inputTitle}>Phone Number</p>
              <div className={classes.placeholder} data-placeholder="+234">
                <input
                  type="number"
                  name="number"
                  data-js="form-text"
                  className={classes.input}
                  title="please enter your number"
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
            </div>

            <div
              className={`${classes.email} ${classes.inputName} ${emailNameClasses}`}
            >
              <p className={classes.inputTitle}>Email Address</p>
              <input
                type="email"
                id="name"
                className={classes.input}
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
          </div>
          <button type="submit" disabled={!formIsValid}>
            Continue
          </button>
          <p className={classes.haveAccount}>
            Have an account already? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
