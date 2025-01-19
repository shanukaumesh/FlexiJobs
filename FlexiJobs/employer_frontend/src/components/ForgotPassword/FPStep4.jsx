import React from 'react';
import '../../styles/ForgotPasswordSteps/Step4.css';

const Success = () => {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <div className="forgot-password-left">
          <img src="/path-to-image" alt="Success Illustration" />
        </div>
        <div className="forgot-password-right">
          <h2>Password Updated Successfully</h2>
          <p>Your password has been updated. You can now log in with your new credentials.</p>
          <button
            className="forgot-password-btn"
            onClick={() => (window.location.href = '/login')}
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
