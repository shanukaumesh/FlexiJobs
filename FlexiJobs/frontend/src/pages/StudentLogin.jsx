import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/StudentLogin.css";
import LoginIllustration from "../assets/loginpageImage.png";
import Header_LogOutUser from "../components/Header_LogOutUser";

const StudentLogin = () => {
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
        "http://localhost:8000/user-ms/users/login",
        {
          email,
          password,
        }
      );

      const user = response.data;

      if (user.role === "student") {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/student");
      } else {
        setError("You are not authorized to log in as a student.");
      }
    } catch (error) {
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
              src={LoginIllustration} // Replace with your student image path
              alt="Student Login Illustration"
            />
          </div>
          <div className="login-right">
            <h2>Student Login</h2>
            <p>Log in to your student account</p>
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

export default StudentLogin;
