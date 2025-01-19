import React from "react";
import "../../styles/EmployerUIs/JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <img src={job.logo} alt={job.title} className="job-image" />
      <div className="job-details">
        <h4>{job.title}</h4>
        <p>{job.companyName}</p>
        <p>{job.location}</p>
        <p className="job-status">{job.jobStatus}</p>
      </div>
    </div>
  );
};

export default JobCard;
