import React, { useState } from "react";
import Amount from "./Amount";
import Beneficiary from "./Beneficiary";
import GeneralExchange from "./GeneralExchange";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Review from "./Review";
import Sent from "./Sent";
import WalletBalance from "./WalletBalance";

function MasterForm() {
  const [page, setPage] = useState(1);

  const [userInput, setUserInput] = useState({
    USD: "",
    naira: "",
    fullName: "",
    accountNumber: "",
    bankName: "",
    selectCountry: "",
    SwiftCode: "",
    routingNumber: "",
  });

  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const prevStep = () => {
    setPage((currPage) => currPage - 1);
  };

  const handleChange = (input) => (e) => {
    const { value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const PageDisplay = () => {
    if (page === 1)
      return (
        <Amount
          nextStep={nextStep}
          handleChange={handleChange}
          values={userInput}
        />
      );
    else if (page === 2)
      return (
        <Beneficiary
          nextStep={nextStep}
          handleChange={handleChange}
          prevStep={prevStep}
          values={userInput}
        />
      );
    else if (page === 3)
      return (
        <Review nextStep={nextStep} values={userInput} prevStep={prevStep} />
      );
    else if (page === 4)
      return <Sent nextStep={nextStep} handleChange={handleChange} />;
    else return <GeneralExchange  values={nextStep}/>;
  };

  return (
    <div>
      <MultiStepProgressBar step={page} />
      <div>{PageDisplay()}</div>
    </div>
  );
}

export default MasterForm;
