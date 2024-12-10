import React from 'react';
import '../styles/Login.css';
import LoginIllustration from '../assets/loginpageImage.png';
import Header_LogOutUser from '../components/Header_LogOutUser';
import { useNavigate } from "react-router-dom";


const Welcome = () => {

const navigate = useNavigate();

const goToStudentLogin =()=>{

    navigate('/student-login');

}


const goToEmployerLogin =()=>{

    navigate('/employer-login');

}


  return (
    <div>
      <Header_LogOutUser />
      <div className="welcome-page">
        <div className="welcome-card">
          <div className="welcome-left">
            <img
              src={LoginIllustration} // Replace with your image path
              alt="Welcome Illustration"
            />
          </div>
          <div className="welcome-right">
            <h2>Welcome Back!</h2>
            <p>Select your role to continue</p>
            <div className="button-container">
             
              <button className="role-button" onClick={goToStudentLogin} >Student</button>
              <button className="role-button" onClick={goToEmployerLogin}>Employer</button>

            </div>
            <p className="terms">
              By creating an account, you agree with our{' '}
              <a href="/terms">Terms and Conditions</a> and{' '}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
