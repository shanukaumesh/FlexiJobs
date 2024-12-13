import React, { useState } from "react";
import "../../../styles/RegistrationSteps/Step1.css";
import RegisterPageImage from "../../../assets/EmployerGroupImage.png";
import axios from "axios";

const Step1 = ({ nextStep }) => {
  const [error, setError] = useState(""); // State to handle error messages
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset error state

    // Include the role as 'employer'
    const employerData = { ...formData, role: "employer" };

    try {
      // API call to create the employer
      const response = await axios.post(
        "http://localhost:8000/user-ms/users", 
        employerData
      );

      console.log("Employer created successfully:", response.data);

      // Save employerId in localStorage
      localStorage.setItem("employerId", response.data); // Save the integer response directly

      // Proceed to the next step
      nextStep();
    } catch (err) {
      console.error("Error creating employer:", err);
      // Handle error and show a message to the user
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <img src={RegisterPageImage} alt="Illustration" />
        </div>
        <div className="register-right">
          <h2>Sign Up</h2>
          <h4>Find the perfect talent for your business!</h4>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-pw">
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <button className="register-btn" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;