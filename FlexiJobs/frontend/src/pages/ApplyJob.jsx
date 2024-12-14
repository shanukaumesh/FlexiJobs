import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/ApplyJob.css";
import axios from "axios";

const ApplyJob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate user data
    if (!formData.name || !formData.email) {
      alert("Please fill out all required fields.");
      return;
    }

    const dummyResumeURL = "https://example.com/dummy-resume.pdf"; 

    // Construct the payload
    const payload = {
      jobTitle: job.jobTitle,
      location: job.location,
      fullName: formData.name,
      email: formData.email,
      resume: dummyResumeURL,
      status: true,
    };

    console.log("Submitting application payload:", payload);

    try {
      const response = await axios.post(
        "http://localhost:8002/application-ms/applications",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Application submitted successfully:", response.data);
        navigate("/applications")
      }
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
        alert(`Submission failed: ${error.response.data.message}`);
      } else {
        console.error("Error:", error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="job-details-page">
      {/* Header */}
      <Header_LoggedUser />

      {/* Main content container */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Apply Job form */}
        <div className="job-details-content">
          <h1>Apply for {job.jobTitle}</h1>
          <p>
            <strong>Company:</strong> {job.companyName}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume (PDF):</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </div>

            <p>
              By submitting this application, you agree to the terms and
              conditions.
            </p>

            <div className="btn-group">
              <button
                className="back-btn"
                type="button"
                onClick={() => window.history.back()}
              >
                Back
              </button>
              <button className="apply-btn" type="submit">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
