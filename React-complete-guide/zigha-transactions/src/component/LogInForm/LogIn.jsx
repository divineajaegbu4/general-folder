import React  from "react";
import { Link } from "react-router-dom";

import ZigDescription from "../ZigaDescription/ZigaDescription";
import useInput from "../../hooks/use-input";
import { auth } from "../../hooks/firebase";
import classes from "./LogIn.module.css";

const isEmail = (value) => value.trim().includes("@");
const isPassword = (value) => value.trim().length === 8;

function LogIn() {
  const {
    value: emailNameValue,
    hasError: emailNameHasError,
    isValid: emailNameIsValid,
    valueChangeHandler: emailNameChangeHandler,
    inputBlurHandler: emailNameBlurHandler,
    reset: resetEmailName,
  } = useInput(isEmail);

  const {
    value: passwordNameValue,
    hasError: passwordNameHasError,
    isValid: passwordNameIsValid,
    valueChangeHandler: passwordNameChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordName,
  } = useInput(isPassword);

  let formIsValid = false;

  if (
    passwordNameIsValid &&
    emailNameIsValid &&
  ) {
    formIsValid = true;
  }

  const emailNameClasses = emailNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const passwordNameClasses = passwordNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(emailNameValue, passwordNameValue)
      .then((auth) => {
        if (auth) {
          resetPasswordName();
          resetEmailName();
          nextStep();
        }
      }) .catch((error) => alert("Authentication failed!"));
    
  };
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigDescription />
      </div>
      <form>
        <div className={classes.LoginToAccount}>
          <h2>Jump right back in</h2>
          <p className={classes.personalInformation}>
            <small>Sign in to continue</small>
          </p>
          <div className={classes.containerFormInput}>
            <div className={`${classes.firstName} ${classes.inputName}`}>
              <p className={classes.inputTitle}>Email Address</p>
              <input
                type="email"
                className={classes.input}
                title="please enter your email"
              />
            </div>

            <div className={`${classes.LastName} ${classes.inputName}`}>
              <p className={classes.inputTitle}>Password</p>
              <input
                type="password"
                className={classes.input}
                title="please enter your password"
              />
              <br />
              <Link className={classes.forgotPassword} to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <button type="submit">Next</button>
            <p className={classes.LoginAccount}>
              New User?
              <Link className={classes.link} to="/">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}

export default LogIn;
