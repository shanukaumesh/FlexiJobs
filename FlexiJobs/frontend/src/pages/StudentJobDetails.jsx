import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/StudentJobDetails.css";
 
const StudentJobDetails = () => {
  const location = useLocation();
  const { job } = location.state || {}; // Get the job details from the location state
  
  const [jobStatus, setJobStatus] = useState(job?.status || "Not Started");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    if (jobStatus === "Completed") {
      const hoursWorked = (endTime - startTime) / (1000 * 60 * 60); // Convert ms to hours
      setTotalPayment(hoursWorked * 20); // Example: $20 per hour
    }
  }, [jobStatus, startTime, endTime]);

  const handleStartJob = () => {
    setJobStatus("Ongoing");
    setStartTime(new Date().getTime()); // Set start time to now
  };

  const handleStopJob = () => {
    setJobStatus("Completed");
    setEndTime(new Date().getTime()); // Set end time to now
  };

  if (!job) {
    return <div>Job details not found.</div>;
  }

  return (
    <div className="student-job-details-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="job-details-content">
          <h1>{job.jobTitle} - Details</h1>
          <p><strong>Employer:</strong> {job.employer}</p>
          <p><strong>Start Date:</strong> {job.startDate}</p>
          <p><strong>Status:</strong> {jobStatus}</p>

          {jobStatus === "Ongoing" && (
            <div className="progress-section">
              <h3>Job In Progress</h3>
              <p><strong>Start Time:</strong> {new Date(startTime).toLocaleTimeString()}</p>
              <button className="btn-stop" onClick={handleStopJob}>
                Stop Job
              </button>
            </div>
          )}

          {jobStatus === "Not Started" && (
            <div className="start-section">
              <h3>Ready to Start</h3>
              <button className="btn-start" onClick={handleStartJob}>
                Start Job
              </button>
            </div>
          )}

          {jobStatus === "Completed" && (
            <div className="completed-section">
              <h3>Job Completed</h3>
              <p><strong>Hours Worked:</strong> {((endTime - startTime) / (1000 * 60 * 60)).toFixed(2)} hours</p>
              <p><strong>Hourly Rate:</strong> $20</p>
              <p><strong>Total Payment:</strong> ${totalPayment.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentJobDetails;
