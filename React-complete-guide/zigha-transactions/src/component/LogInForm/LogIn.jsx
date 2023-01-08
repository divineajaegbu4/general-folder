import React, {useContext}from "react";
import { Link, useHistory } from "react-router-dom";

import ZigDescription from "../ZigaDescription/ZigaDescription";
import useInput from "../../hooks/use-input";
import { auth } from "../../hooks/firebase";
import AuthContext from "../../store/auth-context";
import classes from "./LogIn.module.css";

const isEmail = (value) => value.trim().includes("@");
const isPassword = (value) => value.trim().length === 8;

function LogIn() {
  const history = useHistory();


  const authCtx = useContext(AuthContext);

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

  if (passwordNameIsValid && emailNameIsValid) {
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

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApfpmgvVx0vJ96b19jVRQCABmG0XB1bcU",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailNameValue,
          password: passwordNameValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        // setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            resetPasswordName();
            resetEmailName();
            history.push("/dashboard");
          });
        }
      })
      // .then((data) => {
      //   const expirationTime = new Date(
      //     new Date().getTime() + +data.expiresIn * 1000
      //   );
      //   authCtx.login(data.idToken, expirationTime.toISOString());
      //   resetPasswordName();
      //   resetEmailName();
      //   history.push("/");
      // })
      .catch((err) => {
        alert(err.message);
      });
    // auth
    // .signInWithEmailAndPassword(emailNameValue, passwordNameValue)
    // .then((auth) => {
    //     resetPasswordName();
    //     resetEmailName();
    //     history.push("/")

    // }) .catch((error) => alert(error.message));
  };
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigDescription />
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.LoginToAccount}>
          <h2>Jump right back in</h2>
          <p className={classes.personalInformation}>
            <small>Sign in to continue</small>
          </p>
          <div className={classes.containerFormInput}>
            <div
              className={`${classes.firstName} ${classes.inputName} ${emailNameClasses}`}
            >
              <p className={classes.inputTitle}>Email Address</p>
              <input
                type="email"
                className={classes.input}
                title="please enter your email"
                value={emailNameValue}
                onChange={emailNameChangeHandler}
                onBlur={emailNameBlurHandler}
              />
              {emailNameHasError && (
                <p className={classes.errorText}>Please enter a valid email.</p>
              )}
            </div>

            <div
              className={`${classes.LastName} ${classes.inputName} ${passwordNameClasses}`}
            >
              <p className={classes.inputTitle}>Password</p>
              <input
                type="password"
                className={classes.input}
                title="please enter your password"
                value={passwordNameValue}
                onChange={passwordNameChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordNameHasError && (
                <p className={classes.errorText}>
                  Password must be 8 characters.
                </p>
              )}
              <br />
              <Link className={classes.forgotPassword} to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <button className={classes.createPasswordButton} type="submit" disabled={!formIsValid}>
              Next
            </button>
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
