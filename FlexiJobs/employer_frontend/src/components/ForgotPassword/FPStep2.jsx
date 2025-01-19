import React from 'react';
import '../../styles/ForgotPasswordSteps/Step2.css';

const Step2 = ({ handleSubmit, verificationCode, setVerificationCode, prevStep }) => {
  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <div className="forgot-password-left">
          <img src="/path-to-image" alt="Verification Illustration" />
        </div>
        <div className="forgot-password-right">
          <h2>Email Verification Code</h2>
          <p>Enter the 6-digit code sent to your email address.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="verificationCode"
                placeholder="Enter Code"
                value={verificationCode}
                onChange={handleChange}
                maxLength="6"
                required
              />
            </div>
            <div className="button-group">
              <button className="forgot-password-btn" onClick={prevStep} type="button">
                Back
              </button>
              <button className="forgot-password-btn" type="submit">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
