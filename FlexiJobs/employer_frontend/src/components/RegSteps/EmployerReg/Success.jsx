import React from 'react';
import '../../../styles/RegistrationSteps/Success.css';
import RegisterPageImage from '../../../assets/EmployerGroupImage.png'


const Success = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <img src={RegisterPageImage} alt="Success Illustration" />
        </div>
        <div className="register-right">
          <h2>Thank You!</h2>
          <p>Your account has been successfully created.</p>
          <button className="login_btn" onClick={() => window.location.href = '/login'}>
            Login Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
