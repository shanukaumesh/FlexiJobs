import React from "react";
import "../../styles/StudentUIs/OngoingJobsCard.css";
import LoginIllustration from "../../assets/EmployerGroupImage.png"; // Correctly import fallback image

const OngoingJobsCard = ({ job }) => {
  return (
    <div className="job-card">
      <img
        src={job.image}
        alt={job.title}
        className="job-image"
        onError={(e) => { e.target.src = LoginIllustration; }} // Fallback for broken image
      />
      <div className="job-details">
        <h4>{job.title}</h4> {/* Ensure correct property */}
        <p>{job.company}</p> {/* Ensure correct property */}
        <p>{job.location || "Location not specified"}</p> {/* Fallback for missing location */}
        <p className="job-status">{job.status}</p>
        <p className="job-amount">Duration: {job.timePeriod || "00:00:00"}</p> {/* Fallback for missing duration */}
      </div>
    </div>
  );
};

export default OngoingJobsCard;
