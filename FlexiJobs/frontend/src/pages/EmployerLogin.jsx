import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/EmployerLogin.css";
import LoginIllustration from "../assets/EmployerGroupImage.png";
import Header_LogOutUser from "../components/Header_LogOutUser";

const EmployerLogin = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend login API
      const response = await axios.post(
        "http://localhost:8080/auth/login/employer", // Updated API endpoint
        {
          email,
          password,
        }
      );

      const { message, employer } = response.data;

      // Log the response for debugging
      console.log("Login response:", response.data);

      if (employer) {
        // Save the employer's ID and other necessary info to localStorage
        localStorage.setItem("userId", employer.id);
        localStorage.setItem("email",employer.email)
        localStorage.setItem("user", JSON.stringify(employer));


        // Redirect to the employer dashboard
        navigate("/employer");
      } else {
        setError("Invalid login credentials or unauthorized user.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <Header_LogOutUser />
      <div className="login-page">
        <div className="login-card">
          <div className="login-left">
            <img
              src={LoginIllustration} // Replace with your employer image path
              alt="Employer Login Illustration"
            />
          </div>
          <div className="login-right">
            <h2>Employer Login</h2>
            <p>Log in to your employer account</p>
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
              <button type="submit" className="login-btn">
                Log In
              </button>
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

export default EmployerLogin;
