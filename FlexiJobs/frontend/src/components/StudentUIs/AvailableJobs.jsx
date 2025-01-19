import React from "react";
import "../../styles/StudentUIs/OngoingJobsCards.css"; // New CSS file name
import LoginIllustration from "../../assets/EmployerGroupImage.png"; // Correctly import fallback image

const JobCard = ({ job, onClick }) => {
  const formattedDeadline = new Date(job.deadline).toISOString().split("T")[0];

  return (
    <div className="card-container" onClick={onClick}>
      <img
             src={job.image}
             alt={job.title}
             className="job-image"
             onError={(e) => { e.target.src = LoginIllustration; }} // Fallback for broken image
           />
      <div className="card-info">
        <h4>{job.jobTitle}</h4>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <p className="card-status">{job.status}</p>
        <p className="card-deadline">Application Deadline: {formattedDeadline}</p>
      </div>
    </div>
  );
};

export default JobCard;
