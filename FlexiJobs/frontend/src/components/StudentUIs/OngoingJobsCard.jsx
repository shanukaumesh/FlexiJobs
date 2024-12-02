import React from "react";
import "../../styles/StudentUIs/OngoingJobsCard.css";

const OngoingJobsCard = ({ job }) => {
  return (
    <div className="ongoing-jobs-card">
      <h4>{job.title}</h4>
      <p>{job.location}</p>
      <p>{job.status}</p>
      <p>{job.date}</p>
      <div className="job-footer">
        <a href="#">Details</a>
        <p>{job.salary}</p>
      </div>
    </div>
  );
};

export default OngoingJobsCard;
