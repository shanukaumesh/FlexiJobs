import React, { useState } from 'react';
import Step1 from '../components/RegSteps/EmployerReg/Step1';
import Step2 from '../components/RegSteps/EmployerReg/Step2';
import Success from '../components/RegSteps/EmployerReg/Success';
import Header_LogOutUser from '../components/Header_LogOutUser';

const EmployerRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form Submitted', formData);
    nextStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
      case 3:
        return <Success />;
      default:
        return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
    }
  };

  return <div>
    <Header_LogOutUser/>{renderStep()}</div>;
};

export default EmployerRegister;
