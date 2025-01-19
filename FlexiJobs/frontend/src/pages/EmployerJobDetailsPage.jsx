import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/JobDetailsPage.css";

const JobDetailsPage = () => { 
  const { id } = useParams(); // Get the job ID from the URL
  const location = useLocation();
  const { job } = location.state || {}; // Access job details passed via state

  console.log("Job ID from URL:", id); // Log to verify job ID
  console.log("Received job data:", job); // Log to verify job data

  const [jobStatus, setJobStatus] = useState(job?.status || "Not Started");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalPayment, setTotalPayment] = useState(0);

  // Calculate total payment when the job is completed
  useEffect(() => {
    if (jobStatus === "Completed" && startTime && endTime) {
      const hoursWorked = (endTime - startTime) / (1000 * 60 * 60); // Convert ms to hours
      setTotalPayment(hoursWorked * 20); // Example: $20 per hour
    }
  }, [jobStatus, startTime, endTime]);

  const handleStartJob = () => {
    setJobStatus("In Progress");
    setStartTime(new Date().getTime()); // Set start time to now
  };

  const handleStopJob = () => {
    setJobStatus("Completed");
    setEndTime(new Date().getTime()); // Set end time to now
  };

  return (
    <div className="job-details-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="details-content">
          <h1>Job Details</h1>
          {job ? (
            <>
              <div className="job-card">
                <h2>{job.jobTitle}</h2>
                <p><strong>Applicant Name:</strong> {job.applicantName}</p>
                <p><strong>Email:</strong> {job.email}</p>
                <p><strong>Start Date:</strong> {job.startDate}</p>
                <p>
                  <strong>Status:</strong>
                  <span className={`status ${jobStatus.toLowerCase()}`}>
                    {jobStatus}
                  </span>
                </p>
              </div>

            
            </>
          ) : (
            <p>Job details not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
