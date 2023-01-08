import React from "react";
import ZigaDescription from "../../ZigaDescription/ZigaDescription";
import useInput from "../../../hooks/use-input";
import classes from "./GeneralStyleForm.module.css";

const isPassword = (value) => value.trim().length === 4;

function CreatePin({ nextStep }) {
  const {
    value: passwordNameValue,
    isValid: passwordNameIsValid,
    hasError: passwordNameHasError,
    valueChangeHandler: passwordNameChangeHandler,
    inputBlurHandler: passwordNameBlurHandler,
    reset: resetPasswordName,
  } = useInput(isPassword);
  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmName,
  } = useInput(isPassword);

  let formIsValid = false;

  if (passwordNameIsValid && confirmPasswordIsValid) {
    formIsValid = true;
  }

  const passwordNameClasses = passwordNameHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const confirmNameClasses = confirmPasswordHasError
    ? `${classes.formControl} ${classes.invalid}`
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();

    resetPasswordName();
    resetConfirmName();
    nextStep();
  };

  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigaDescription />
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.createPIN}>
          <h2>Create a PIN</h2>

          <p className={classes.personalInformation}>
            <small>
              Enter a 4 digit PIN that will be used to authorize
              <br /> transactions.
            </small>
          </p>

          <div className={classes.createPasswordInput}>
            <div
              className={`${classes.createNewPassword} ${classes.spacing} ${passwordNameClasses}`}
            >
              <p className={classes.inputTitle}>Create Password</p>

              <input
                type="password"
                className={`${classes.input} ${classes.inputWidth}`}
                title="please enter your password"
                value={passwordNameValue}
                onChange={passwordNameChangeHandler}
                onBlur={passwordNameBlurHandler}
              />

              {passwordNameHasError && (
                <p className={classes.errorText}>
                  Password must be 4 digit numbers.
                </p>
              )}
            </div>

            <div
              className={`${classes.createConfirmPassword} ${classes.spacing} ${confirmNameClasses}`}
            >
              <p className={classes.inputTitle}>Confirm Password</p>
              <input
                type="password"
                className={`${classes.input} ${classes.inputWidth}`}
                title="please enter your password"
                value={confirmPasswordValue}
                onChange={confirmPasswordChangeHandler}
                onBlur={confirmPasswordBlurHandler}
              />

              {confirmPasswordHasError && (
                <p className={classes.errorText}>Password must be confirmed.</p>
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

export default CreatePin;
