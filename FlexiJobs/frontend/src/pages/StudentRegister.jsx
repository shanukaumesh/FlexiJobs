import React, { useState } from "react";
import Step1 from "../components/RegSteps/Step1";
import Step2 from "../components/RegSteps/Step2";
import Step3 from "../components/RegSteps/Step3";
import Step4 from "../components/RegSteps/Step4";
import Success from "../components/RegSteps/Success";
import Header_LogOutUser from "../components/Header_LogOutUser";

const StudentRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <Step4
            nextStep={handleSubmit}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 5:
        return <Success />;
      default:
        return (
          <Step1
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
    }
  };

  return (
    <div>
      <Header_LogOutUser />
      {renderStep()}
    </div>
  );
};

export default StudentRegister;
