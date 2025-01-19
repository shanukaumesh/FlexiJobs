import React from 'react';
import '../../styles/ForgotPasswordSteps/Step3.css';

const Step3 = ({ handleSubmit, password, setPassword, confirmPassword, setConfirmPassword, prevStep }) => {
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <div className="forgot-password-left">
          <img src="/path-to-image" alt="Password Reset Illustration" />
        </div>
        <div className="forgot-password-right">
          <h2>Update Your Password</h2>
          <p>Use a strong password with a mix of letters, numbers, and symbols.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div className="button-group">
              <button className="forgot-password-btn" onClick={prevStep} type="button">
                Back
              </button>
              <button className="forgot-password-btn" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step3;
