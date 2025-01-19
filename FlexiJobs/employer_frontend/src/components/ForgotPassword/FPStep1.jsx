import React from 'react';
import '../../styles/ForgotPasswordSteps/Step1.css';
import image1 from '../../assets/loginpageImage.png';

const Step1 = ({ handleSubmit, email, setEmail }) => {
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <div className="forgot-password-left">
          <img src={image1} alt="Security Illustration" />
        </div>
        <div className="forgot-password-right">
          <h2>Forgot Password</h2>
          <p>We’ll send you a verification code to reset your password.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <button className="forgot-password-btn" type="submit">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
