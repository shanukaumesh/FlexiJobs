import React from "react";
import "../../styles/StudentUIs/OngoingJobsCard.css";

const AvailableJobs = ({ job, onClick }) => {

  const formattedDeadline = new Date(job.deadline).toISOString().split("T")[0];

  return (
    <div className="job-card" onClick={onClick}>
      <img src={job.logo} alt={job.jobTitle} className="job-image" />
      <div className="job-details">
        <h4>{job.jobTitle}</h4>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <p className="job-status">{job.status}</p>
        <p className="job-amount">Application Deadline: {formattedDeadline}</p>
      </div>
    </div>
  );
};

export default AvailableJobs;
