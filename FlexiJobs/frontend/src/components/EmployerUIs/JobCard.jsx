import React from "react";
import "../../styles/EmployerUIs/JobCard.css";
import LoginIllustration from "../../assets/EmployerGroupImage.png"; // Correctly import fallback image


const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <img
        src={job.image}
        alt={job.title}
        className="job-image"
        onError={(e) => { e.target.src = LoginIllustration; }} // Fallback for broken image
      />
      <div className="job-details">
        <h4>{job.title || "Job Title Unavailable"}</h4> {/* Fallback for missing title */}
        <p>{job.company || "Company Name Unavailable"}</p> {/* Fallback for missing company name */}
        <p>{job.location || "Location Not Specified"}</p> {/* Fallback for missing location */}
        <p className="job-status">
          {job.status || "Status Not Specified"} {/* Fallback for missing status */}
        </p>
        <p className="job-salary">
          {job.salary ? `Salary: ${job.salary}` : "Salary Not Specified"} {/* Optional salary display */}
        </p>
        <p className="job-type">
          {job.jobType || "Job Type Not Specified"} {/* Optional job type */}
        </p>
      </div>
      </div>
      );
};

      export default JobCard;
