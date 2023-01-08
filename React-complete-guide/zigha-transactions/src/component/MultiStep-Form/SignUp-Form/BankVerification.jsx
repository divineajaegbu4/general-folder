import React, { useState } from "react";
import useInput from "../../../hooks/use-input";

import classes from "./GeneralStyleForm.module.css";
import ZigaDescription from "../../ZigaDescription/ZigaDescription";
import { useHistory } from "react-router-dom";



const isPassword = (value) => value.trim().length === 8;

function BankVerification({ nextStep }) {
  const history = useHistory();

  const {
    value: passwordNameValue,
    isValid: passwordNameIsValid,
    hasError: passwordNameHasError,
    valueChangeHandler: passwordNameChangeHandler,
    inputBlurHandler: passwordNameBlurHandler,
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

    resetPasswordName();
    nextStep();
    history.push("/dashboard")
  };
  
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigaDescription />
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.createPIN}>
          <h2>Bank Verification Number</h2>

          <p className={classes.personalInformation}>
            <small>Tell us more about your business</small>
          </p>

          <div className={classes.createPasswordInput}>
            <div className={`${classes.createNewPassword} ${classes.spacing}  ${passwordNameClasses}`}>
              <p className={classes.inputTitle}>BVN</p>
              <input
                className={`${classes.input} ${classes.inputWidth}`}
                type="password"
                value={passwordNameValue}
                onChange={passwordNameChangeHandler}
                onBlur={passwordNameBlurHandler}
              />

              {passwordNameHasError && (
                <p className={classes.errorText}>
                  Password must be 8 digit numbers.
                </p>
              )}
            </div>

            <button className={classes.createPasswordButton} type="submit" disabled={!formIsValid}>
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default BankVerification;
