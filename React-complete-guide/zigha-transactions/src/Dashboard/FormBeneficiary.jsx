import React, { useState } from "react";

import classes from "./Beneficiary.module.css";
import ReactFlag from "./ReactFlag";
import UploadImageSVG from "./UploadImageSVG";

function FormBeneficiary(props) {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Upload Invoice (png, jpg, or pdf)");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <div className={classes.beneficiarySelect}>
      <div className={classes.fullNameClasses}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Recipient Full Name"
          className={classes.input}
          defaultValue={props.valueBeneficiary.fullName}
          onChange={props.handle("fullName")}
        />
      </div>
      <div className={classes.accNameClasses}>
        <input
          type="number"
          id="number"
          name="number"
          defaultValue={props.valueBeneficiary.accountNumber}
          onChange={props.handle("accountNumber")}
          placeholder="Account Number"
          className={classes.input}
        />
      </div>
      <div className={classes.bankNameClasses}>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={props.valueBeneficiary.bankName}
          onChange={props.handle("bankName")}
          placeholder="Bank Name"
          className={classes.input}
        />
      </div>
      <div className={classes.routingNameClasses}>
        <input
          type="number"
          id="number"
          name="number"
          defaultValue={props.valueBeneficiary.routingNumber}
          onChange={props.handle("routingNumber")}
          placeholder="Routing Number"
          className={classes.input}
        />
      </div>

      <div>
        <ReactFlag
          selectValue={props.valueBeneficiary.selectCountry}
          handle={props.handle("selectCountry")}
        />
      </div>
      <div className={classes.swiftNameClasses}>
        <input
          type="number"
          id="number"
          name="number"
          defaultValue={props.valueBeneficiary.swiftCode}
          onChange={props.handle("swiftCode")}
          placeholder="Swift Code"
          className={classes.input}
        />
      </div>
      <div className={classes.uploadImages}>
        <input
          type="file"
          id="customFile"
          className={classes.hideFile}
          onChange={onChange}
        />
        <label
          htmlFor="customFile"
          className={`${classes.fontSizeFile} ${
            file ? classes.blackColor : filename ? classes.grayColor : ""
          }`}
        >
          {filename}
          <span className={classes.svgImageClick}>
            <UploadImageSVG />
          </span>
        </label>
      </div>
      <button
        type="submit"
        className={classes.submitBeneficiaryForm}
        onClick={props.next}
        disabled={
          !file ||
          !props.valueBeneficiary.fullName ||
          !props.valueBeneficiary.bankName ||
          !props.valueBeneficiary.routingNumber ||
          !props.valueBeneficiary.swiftCode ||
          !props.valueBeneficiary.accountNumber ||
          !props.valueBeneficiary.selectCountry
        }
      >
        Continue
      </button>
    </div>
  );
}

export default FormBeneficiary;
