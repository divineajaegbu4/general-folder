import React from "react";
import { Link } from "react-router-dom";
import ZigaDescription from "../ZigaDescription/ZigaDescription";
import classes from "./LogIn.module.css";

function ForgotPassword() {
  return (
    <section className={classes.containerForm}>
      <div className={classes.form}>
        <ZigaDescription />
      </div>
      <form>
        <div className={classes.LoginToAccount}>
          <h2>Jump right back in</h2>
          <p className={classes.personalInformation}>
            <small>Jump right back in Sign in to continue</small>
          </p>
          <div className={`${classes.LastName} ${classes.inputName}`}>
            <p className={classes.inputTitle}>Password</p>
            <input type="password" className={classes.input} />
          </div>
          <button type="submit">
            <Link className={classes.backToLogin} to="/login">
              Continue
            </Link>
          </button>
        </div>
      </form>
    </section>
  );
}

export default ForgotPassword;
