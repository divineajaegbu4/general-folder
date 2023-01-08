import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdToggleOff } from "react-icons/md";

import classes from "./Beneficiary.module.css";
import FormBeneficiary from "./FormBeneficiary";

function Beneficiary(props) {
  const { nextStep, prevStep, handleChange, values, minute, second } = props;

  const [beneficiaryIcon, setBeneficiaryIcon] = useState(false);
  const [showBeneficiaryIcon, setShowBeneficiaryIcon] = useState(true);

  const [activeState, setActiveState] = useState({
    activeObject: null,
    newSaveState: [{ new: "New Beneficiary" }, { save: "Save Beneficiary" }],
  });

  const beneficiaryIconHandler = () => {
    setBeneficiaryIcon(false);
  };
  const changeBeneficiary = () => {
    setBeneficiaryIcon(true);
  };

  const toggleActive = (index) => {
    setActiveState({
      ...activeState,
      activeObject: activeState.newSaveState[index],
    });
  };

  const toggleActiveStyles = (index) => {
    if (activeState.newSaveState[index] === activeState.activeObject) {
      return classes.backgroundShow;
    } else {
      return "";
    }
  };

  return (
    <div className={classes.beneficiary}>
      <div className={classes.mins}>
        <p className={classes.minsRate}>
          The rate is valid for <span>{minute}</span>:<span>{second}</span>
        </p>
      </div>

      <div className={classes.beneficiaryTitle}>
        <p className={classes.prevButton} onClick={prevStep}>
          <IoIosArrowBack /> Back
          <span className={classes.beneficiaryDetails}>
            Beneficiary Details
          </span>
        </p>
      </div>

      <div className={classes.generalForm}>
        <div className={classes.newAndSavedBeneficiary}>
          {activeState.newSaveState.map((elements, index) => (
            <div
              className={toggleActiveStyles(index)}
              key={index}
              onClick={() => {
                toggleActive(index);
              }}
            >
              <h3
                className={classes.clickBeneficiary}
                onClick={beneficiaryIconHandler}
              >
                {elements.new}
              </h3>
              <h3
                className={classes.clickBeneficiary}
                onClick={changeBeneficiary}
              >
                {elements.save}
              </h3>
            </div>
          ))}
        </div>

        <form className={`${classes.beneficiaryForm}`}>
          {beneficiaryIcon ? (
            <FormBeneficiary
              next={nextStep}
              valueBeneficiary={values}
              handle={handleChange}
            />
          ) : showBeneficiaryIcon ? (
            <FormBeneficiary
              next={nextStep}
              valueBeneficiary={values}
              handle={handleChange}
            />
          ) : null}

          <div onClick={changeBeneficiary}>
            {!beneficiaryIcon && (
              <div className={classes.clickSave}>
                <h3 className={classes.saveBeneficiaryForm}>
                  Save Beneficiary?
                </h3>
                <div>
                  <span className={classes.iconSave}>
                    <MdToggleOff />
                  </span>
                  <span className={classes.yesSave}>Yes</span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Beneficiary;
