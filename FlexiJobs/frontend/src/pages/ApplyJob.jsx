import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/ApplyJob.css"; 

const ApplyJob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state; // Getting job details passed from JobDetails

  const [application, setApplication] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication({
      ...application,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setApplication({
      ...application,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle your form submission logic here (e.g., sending to API)
    alert("Application submitted for " + job.title);
    navigate("/"); // Redirect to home page after submission or show a success message
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
          <h1>Apply for {job.title}</h1>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={application.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={application.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="resume">Resume (PDF):</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
            </div>

            <h6>By submitting this application, you agree to the terms and conditions.</h6>
            
            <div className="btn-group">

           {/* Back button */}
            <button className="back-btn" onClick={() => window.history.back()}>Back</button>
            <button className="apply-btn" type="submit">Submit Application</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
