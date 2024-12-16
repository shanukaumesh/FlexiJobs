import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // For accessing state from navigation
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/JobDetailsPage.css";

const JobDetailsPage = () => {

    const jobId = 1354;
    const location = useLocation();
    const { job } = location.state || {}; // Accessing job details passed from JobTrackingPage
    const [jobStatus, setJobStatus] = useState(job?.status || "Not Started");
    const [startTime, setStartTime] = useState(null);

    const handleStartJob = () => {
        setJobStatus("In Progress");
        setStartTime(new Date().toLocaleString());
    };

    const handleStopJob = () => {
        setJobStatus("Completed");
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
                    <h5>Job ID : {jobId}</h5>
                    {job ? (
                        <>
                            <div className="job-card">
                                <h2>{job.jobTitle}</h2>
                                <p>
                                    <strong>Applicant Name:</strong> {job.applicantName}
                                </p>
                                <p>
                                    <strong>Email:</strong> {job.email}
                                </p>
                                <p>
                                    <strong>Start Date:</strong> {job.startDate}
                                </p>
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span className={`status ${jobStatus.toLowerCase()}`}>
                                        {jobStatus}
                                    </span>
                                </p>
                            </div>

                            {jobStatus === "In Progress" && (
                                <div className="progress-section">
                                    <h3>Job In Progress</h3>
                                    <p>
                                        <strong>Start Time:</strong> {startTime}
                                    </p>
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
                                    <p>
                                        <strong>Hours Worked:</strong> 8
                                    </p>
                                    <p>
                                        <strong>Hourly Rate:</strong> $20
                                    </p>
                                    <p>
                                        <strong>Total Payment:</strong> $160
                                    </p>
                                </div>
                            )}
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
