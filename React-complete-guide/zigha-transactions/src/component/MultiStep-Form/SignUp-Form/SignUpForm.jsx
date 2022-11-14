import React from "react";
import ZigaDescription from "../../ZigaDescription/ZigaDescription";
import classes from "./GeneralStyleForm.module.css";
import { Link } from "react-router-dom";

function SignUpForm({ nextStep }) {
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigaDescription />
      </div>
      <form>
        <div className={classes.createAccount}>
          <h2>Create Account</h2>
          <p className={classes.personalInformation}>
            <small>Use your personal information</small>
          </p>
          <div className={classes.containerFormInput}>
            <div className={`${classes.firstName} ${classes.inputName}`}>
              <p className={classes.inputTitle}>First Name</p>
              <input
                className={classes.input}
                type="text"
                title="please enter your name"
                required
              />
            </div>

            <div className={`${classes.LastName} ${classes.inputName}`}>
              <p className={classes.inputTitle}>Last Name</p>
              <input
                className={classes.input}
                type="text"
                title="please enter your name"
                required
              />
            </div>

            <div className={`${classes.number} ${classes.inputName}`}>
              <p className={classes.inputTitle}>Phone Number</p>
              <div className={classes.placeholder} data-placeholder="+234">
                <input
                  type="number"
                  name="number"
                  data-js="form-text"
                  className={classes.input}
                  title="please enter your number"
                  required
                />
              </div>
            </div>

            <div className={`${classes.email} ${classes.inputName}`}>
              <p className={classes.inputTitle}>Email Address</p>
              <input
                type="email"
                className={classes.input}
                title="please enter your email"
                required
              />
            </div>
          </div>
          <button type="submit">Continue</button>
          <p className={classes.haveAccount}>
            Have an account already? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
