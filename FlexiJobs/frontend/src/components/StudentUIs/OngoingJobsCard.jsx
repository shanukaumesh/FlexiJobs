import React from "react";
import "../../styles/StudentUIs/OngoingJobsCard.css";

const OngoingJobsCard = ({ job }) => {
  return (
    <div className="job-card">
      <img src={job.image} alt={job.title} className="job-image" />
      <div className="job-details">
        <h4>{job.title}</h4>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <p className="job-status">{job.status}</p>
        <p className="job-amount">Duration: {job.timePeriod}</p>
        
      </div>
    </div>
  );
};


export default OngoingJobsCard;
