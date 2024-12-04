import React from 'react';
import '../styles/Login.css';
import LoginIllustration from '../assets/loginpageImage.png';
import Header_LogOutUser from '../components/Header_LogOutUser';


const Login = () => {
  
  return (
    
    <div> <Header_LogOutUser/>
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <img
            src={LoginIllustration} // Replace with your image path
            alt="Login Illustration"
          />
        </div>
        <div className="login-right">
          <h2>Welcome Back</h2>
          <p>Please log in to your account</p>
          <form className="login-form">
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">Log In</button>
          </form>
          <p className="register-link">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    </div></div>
  );
};

export default Login;
