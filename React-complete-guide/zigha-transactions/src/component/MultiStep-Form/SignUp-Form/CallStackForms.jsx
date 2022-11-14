import React, { useState } from "react";
import CreatePassword from "./CreatePassword";
import SignUpForm from "./SignUpForm";
import Final from "./Final";
import CreatePin from "./CreatePin";
import BusinessDetails from "./BusinessDetails";
import HomeAddress from "./HomeAddress";
import BankVerification from "./BankVerification";

function CallStackForms() {
  const [step, setstep] = useState(1);

  //state for form data
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

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <SignUpForm
            nextStep={nextStep}
            // handleFormData={handleInputData}
            // values={formData}
          />
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <CreatePassword
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div className="App">
          <CreatePin
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 4:
      return (
        <div className="App">
          <BusinessDetails
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 5:
      return (
        <div className="App">
          <HomeAddress
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 6:
      return (
        <div className="App">
          <BankVerification
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 7:
      return (
        <div className="App">
          <Final values={formData} />
        </div>
      );
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
}

export default CallStackForms;
