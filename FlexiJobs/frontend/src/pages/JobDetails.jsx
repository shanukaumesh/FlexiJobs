import React from "react";
import { useLocation, Link } from "react-router-dom";
import Sidebar from "../components/StudentUIs/Sidebar";
import Header_LoggedUser from "../components/Header_LoggedUser";
import "../styles/JobDetails.css"; // Import the CSS file

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state;

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

        {/* Job details */}
        <div className="job-details-content">
          <h1>{job.title}</h1>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Time Period:</strong> {job.timePeriod}</p>
          <img
            src={job.image}
            alt={job.title}
          />
          <p>Additional details about the job can go here...</p>

          {/* Back button */}
          <button className="back-btn" onClick={() => window.history.back()}>Back</button>

          {/* Apply link */}
          <Link
            to="/apply"
            state={{ job }} // Passing job details to the ApplyJob component
          >
            <button className="apply-btn">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
