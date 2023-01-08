import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import ZigaDescription from "../ZigaDescription/ZigaDescription";
import AuthContext from "../../store/auth-context";
import useInput from "../../hooks/use-input";
import classes from "./LogIn.module.css";

const isPassword = (value) => value.trim().length === 8;

function ForgotPassword() {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const {
    value: passwordNameValue,
    hasError: passwordNameHasError,
    isValid: passwordNameIsValid,
    valueChangeHandler: passwordNameChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordName,
  } = useInput(isPassword);

  let formIsValid = false;

  if (passwordNameIsValid) {
    formIsValid = true;
  }

  const passwordNameClasses = passwordNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();


    //add validation
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyApfpmgvVx0vJ96b19jVRQCABmG0XB1bcU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: passwordNameValue,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //assumption: Always succeeds!
      resetPasswordName();
      history.replace("/login");
    });
  };
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigaDescription />
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.LoginToAccount}>
          <h2>Jump right back in</h2>
          <p className={classes.personalInformation}>
            <small>Jump right back in Sign in to continue</small>
          </p>
          <div
            className={`${classes.LastName} ${classes.inputName} ${passwordNameClasses}`}
          >
            <p className={classes.inputTitle}>Password</p>
            <input
              type="password"
              className={classes.input}
              value={passwordNameValue}
              onChange={passwordNameChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordNameHasError && (
              <p className={classes.errorText}>
                Password must be 8 characters.
              </p>
            )}
          </div>
          <button className={classes.createPasswordButton} type="submit" disabled={!formIsValid}>
            {/* <Link className={classes.backToLogin} to="/login">
              Continue
            </Link> */}
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}

export default ForgotPassword;
