import React from 'react';
import '../styles/Login.css';
import LoginIllustration from '../assets/loginpageImage.png';
import Header_LogOutUser from '../components/Header_LogOutUser';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToStudentLogin = () => {
    navigate('/student-login');
  };

  const goToEmployerLogin = () => {
    navigate('/employer-login');
  };

  return (
    <div>
      <Header_LogOutUser />
      <div className="welcome-page">
        <div className="welcome-card">
          <div className="welcome-left">
            <img
              src={LoginIllustration} // Replace with your image path
              alt="Login Illustration"
            />
          </div>
          <div className="welcome-right">
            <h2>Welcome Back to Flexi Jobs</h2>
            <p>Select your role to log in</p>
            <div className="button-container">
              <button className="role-button" onClick={goToStudentLogin}>
                Student Login
              </button>
              <button className="role-button" onClick={goToEmployerLogin}>
                Employer Login
              </button>
            </div>
            <p className="terms">
              By logging in, you agree with our{' '}
              <a href="/terms">Terms and Conditions</a> and{' '}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
