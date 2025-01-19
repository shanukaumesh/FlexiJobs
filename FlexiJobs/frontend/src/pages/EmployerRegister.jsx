import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header_LogOutUser from "../components/Header_LogOutUser";
import "../styles/RegistrationSteps/Employer/EmployerRegister.css";
import RegisterIllustration from "../assets/EmployerGroupImage.png";

const EmployerRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      if (!otpSent) {
        // Step 1: Send OTP
        const response = await axios.post(
          "http://localhost:8080/auth/register/employer",
          {
            email: formData.email,
          }
        );

        if (response.status === 200) {
          setOtpSent(true);
        }
      } else {
        // Step 2: Verify OTP and register
        const response = await axios.post(
          "http://localhost:8080/auth/verify/employer",
          {
            ...formData,
            otp,
          }
        );

        if (response.status === 201) {
          const { employer } = response.data;

          // Save the employer's ID and other necessary info to localStorage
          localStorage.setItem("userId", employer.id);
          localStorage.setItem("user", JSON.stringify(employer));

          // Redirect to the employer dashboard
          navigate("/employer");
        }
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header_LogOutUser />
      <div className="register-page">
        <div className="register-card">
          <div className="register-left">
            <img src={RegisterIllustration} alt="Employer Register Illustration" />
          </div>
          <div className="register-right">
            <h2>Employer Register</h2>
            <p>Create your employer account</p>
            <form className="register-form" onSubmit={handleSubmit}>
              {!otpSent ? (
                <>
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
                </>
              ) : (
                <div className="form-group">
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
              )}
              {errorMessage && <p className="error">{errorMessage}</p>}
              <button type="submit" className="register-btn" disabled={loading}>
                {loading ? "Processing..." : !otpSent ? "Send OTP" : "Verify OTP"}
              </button>
            </form>
            <p className="login-link">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegister;
