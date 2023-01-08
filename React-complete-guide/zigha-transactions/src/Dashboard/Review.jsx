import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import classes from "./Beneficiary.module.css";

function Review({ nextStep, prevStep, values, minute, second, transactionView }) {
  const { USD, fullName, routingNumber, selectCountry } = values;

  // pin

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState(false);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // focus

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const errorClick = () => {
    if(otp.includes("")) {
      alert("Enter Transaction Pin!")
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (otp.includes("")) {
      setError(true);
    } else {
      nextStep();
      transactionView()

    }
  };

  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  return (
    <section className={classes.reviewContainer}>
      <div className={classes.generalReview}>
        <div className={classes.calcTime}>
          <div className={classes.mins}>
            <p className={`${classes.minsRate} ${classes.positionMins}`}>
              The rate is valid for <span>{minute}</span>:<span>{second}</span>
            </p>
          </div>
        </div>
        <div
          className={`${classes.beneficiaryTitle} ${classes.beneficiaryTitleReview}`}
        >
          <p className={classes.previous} onClick={prevStep}>
            <IoIosArrowBack /> Back
            <span className={classes.beneficiaryDetailsReview}>Review</span>
          </p>
        </div>

        <div className={classes.reviewFormContainer}>
          <div className={classes.reviewForm}>
            <div>
              <p>
                Amount Sent
                <br />
                <span>${USD}</span>
              </p>
            </div>
            <div className={classes.reduce}>
              <p className={classes.shiftRight}>
                Amount Received
                <br />
                <span>${Number(USD - Number(500)).toFixed(2)}</span>
              </p>
            </div>
            <div>
              <p>
                Total Amount <br />
                <span>${Number(USD - Number(500)).toFixed(2)}</span>
              </p>
            </div>
            <div className={classes.reduce}>
              <p className={classes.shiftRight}>
                Date
                <br />
                <span>{date}</span>
              </p>
            </div>
            <div>
              <p>
                Recipient
                <br />
                <span>{fullName}</span>
              </p>
            </div>
            <div className={classes.reduce}>
              <p className={classes.shiftRight}>
                Amount Details
                <br />
                <span>{routingNumber}</span>
              </p>
            </div>
            <div>
              <p>
                Country <br />
                <span>{selectCountry}</span>
              </p>
            </div>
            <div className={classes.reduce}>
              <p className={classes.shiftRight}> Currency</p>
            </div>
          </div>

          <form onSubmit={handleForm}>
            <div className={classes.pin}>
              <p>Enter Transaction PIN</p>

              <div className={classes.pinInputsContainer}>
                {otp.map((data, index) => {
                  return (
                    <input
                      type="text"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      name="otp"
                      maxLength="1"
                      placeholder="-"
                      key={index}
                      className={classes.pinInputs}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div>
            </div>

            <div className={classes.buttonReview}>
              <button
                className={classes.cancel}
                onClick={(e) => setOtp([...otp.map((v) => "")])}
              >
                Cancel
              </button>
              <button type="submit" className={classes.send} onClick={errorClick}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Review;
