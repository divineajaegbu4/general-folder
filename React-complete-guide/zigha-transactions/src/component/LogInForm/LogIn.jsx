import React, { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";

import ZigaDescription from "../ZigaDescription/ZigaDescription";
import classes from "./LogIn.module.css";

function LogIn() {
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigaDescription />
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
