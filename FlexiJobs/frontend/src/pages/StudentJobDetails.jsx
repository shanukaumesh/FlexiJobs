import React from "react";
import { useLocation } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/StudentJobDetails.css";

const StudentJobDetails = () => {
  // Get job details passed through location state
  const location = useLocation();
  const { job } = location.state || {}; // job will contain details passed from StudentJobTracking

  if (!job) {
    return <p>Job details not found.</p>;
  }

  return (
    <div className="student-job-details-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="job-details-content">
          <h1>Job Details: {job.jobTitle}</h1>
          <div className="job-details">
            <p>
              <strong>Job Title:</strong> {job.jobTitle}
            </p>
            <p>
              <strong>Employer:</strong> {job.employer}
            </p>
            <p>
              <strong>Start Date:</strong> {job.startDate}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`status ${
                  job.status === "Completed"
                    ? "status-completed"
                    : job.status === "Ongoing"
                    ? "status-ongoing"
                    : "status-not-started"
                }`}
              >
                {job.status}
              </span>
            </p>
            <p>
              <strong>Description:</strong> This is a detailed description of the job, including expectations, responsibilities, and tasks.
            </p>
            {/* Additional information can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentJobDetails;
