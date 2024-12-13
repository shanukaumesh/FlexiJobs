import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/StudentLogin.css';
import LoginIllustration from '../assets/EmployerGroupImage.png';
import Header_LogOutUser from '../components/Header_LogOutUser';

const Login = () => {
  const navigate = useNavigate();

  // Dummy user data
  const users = [
    { email: "employer@example.com", password: "password123", role: "employer" },
    { email: "worker@example.com", password: "password123", role: "worker" },
  ];

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find user based on email and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Redirect based on role
      if (user.role === "employer") {
        navigate("/employer");
      } else if (user.role === "worker") {
        navigate("/student");
      }
    } else {
      // Show error if credentials are invalid
      setError("Invalid email or password.");
    }
  };

  return (
    <div>
      <Header_LogOutUser />
      <div className="login-page">
        <div className="login-card">
          <div className="login-left">
            <img
              src={LoginIllustration} // Replace with your image path
              alt="Login Illustration"
            />
          </div>
          <div className="login-right">
            <h2>Welcome Back!</h2>
            <p>Please log in to your account</p>
            <form className="login-form" onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
      </div>
    </div>
  );
};

export default Login;
