import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import axios from "axios";
import "../styles/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null); // Store job details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const deleteJob = async () => {
    try {
      await axios.delete(`http://localhost:8080/jobs/${id}`);
      alert("Job deleted successfully.");
      window.history.back();
    } catch (err) {
      console.error("Error deleting job:", err);
      alert("Failed to delete job. Please try again later.");
    }
  };

  // Fetch job details on component mount
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/jobs/${id}`); // API call
        setJob(response.data.job); // Set the job data
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to fetch job details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <p>Loading job details...</p>;
  }

  if (error) {
    return (
      <div className="job-details-error">
        <h2>{error}</h2>
        <button className="back-btn" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      {/* Header */}
      <Header_LoggedUser />

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Job Details */}
        <div className="details-content">
          <h1>Job Details</h1>
          {job ? (
            <div className="job-card">
              <h2>{job.title}</h2>
              <p><strong>Company Name:</strong> {job.companyName}</p>
              <p><strong>Description:<br></br></strong> {job.description}</p>
              <p><strong>Salary:</strong> ${job.salary}</p>
              <p><strong>Experience Level:</strong> {job.experienceLevel}</p>
              <p><strong>Application Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
              <p>
                <strong>Job Status:</strong>
                <span className={`status ${job.jobStatus?.toLowerCase()}`}>
                  {job.jobStatus || "Not specified"}
                </span>
              </p>

              {/* Back Button */}
              <button className="baack-btn" onClick={() => window.history.back()}>
                Back
              </button>
              <button className="deleteJob-btn" onClick={() => deleteJob()}>
                Delete Job
              </button>
            </div>
          ) : (
            <p>Job details not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
