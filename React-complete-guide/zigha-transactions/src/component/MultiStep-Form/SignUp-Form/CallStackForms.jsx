import React, { useState } from "react";
import CreatePassword from "./CreatePassword";
import SignUpForm from "./SignUpForm";
import CreatePin from "./CreatePin";
import BusinessDetails from "./BusinessDetails";
import HomeAddress from "./HomeAddress";
import BankVerification from "./BankVerification";

function CallStackForms() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    password: "",
    city: "",
    address: "",
    state: "",
  });

  const nextStep = () => {
    setstep(step + 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  switch (step) {
    case 1:
      return (
        <div className="App">
          <SignUpForm nextStep={nextStep} />
        </div>
      );
    case 2:
      return (
        <div className="App">
          <CreatePassword nextStep={nextStep} />
        </div>
      );
    case 3:
      return (
        <div className="App">
          <CreatePin nextStep={nextStep} />
        </div>
      );
    case 4:
      return (
        <div className="App">
          <BusinessDetails nextStep={nextStep} />
        </div>
      );
    case 5:
      return (
        <div className="App">
          <HomeAddress nextStep={nextStep} />
        </div>
      );
    case 6:
      return (
        <div className="App">
          <BankVerification nextStep={nextStep} />
        </div>
      );

    default:
      return <div className="App"></div>;
  }
}

export default CallStackForms;
