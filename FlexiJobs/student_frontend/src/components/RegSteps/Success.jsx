import React from 'react';
import '../../styles/RegistrationSteps/Success.css';
import RegisterPageImage from '../../assets/loginpageImage.png'


const Success = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <img src={RegisterPageImage} alt="Success Illustration" />
        </div>
        <div className="register-right">
          <h2>Thank You!</h2>
          <p>Your application has been submitted successfully. We will review it and get back to you shortly.</p>
          <button className="register-btn" onClick={() => window.location.href = '/login'}>
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
