import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/StudentLogin.css";
import LoginIllustration from "../assets/EmployerGroupImage.png";
import Header_LogOutUser from "../components/Header_LogOutUser";

const Login = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted with email:", email, "and password:", password); // Log email and password

    try {
      // Make a POST request to the backend login API
      const response = await axios.post(
        "http://localhost:8000/user-ms/users/login",
        {
          email,
          password,
        }
      );

      // Log the response from the backend
      console.log("Login response from backend:", response);

      // Check if the login was successful
      const user = response.data;

      if (user) {
        console.log("User logged in successfully:", user);

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User data saved to localStorage");

        // Redirect based on the role
        if (user.role === "employer") {
          console.log("Redirecting to /employer");
          navigate("/employer");
        } else if (user.role === "student") {
          console.log("Redirecting to /student");
          navigate("/student");
        }
      }
    } catch (error) {
      // Handle error if login fails
      console.log("Login error:", error); // Log the error if login fails
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

export default Login;
