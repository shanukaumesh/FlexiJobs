import React, { useState } from 'react';
import Step1 from '../components/ForgotPassword/FPStep1';
import Step2 from '../components/ForgotPassword/FPStep2';
import Step3 from '../components/ForgotPassword/FPStep3';
import Success from '../components/ForgotPassword/FPStep4';
import Header_LogOutUser from '../components/Header_LogOutUser';

const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Password Reset Submitted:', formData);
    nextStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 nextStep={handleSubmit} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
      case 4:
        return <Success />;
      default:
        return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <Header_LogOutUser />
      {renderStep()}
    </div>
  );
};

export default ForgotPassword;
