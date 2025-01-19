import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import axios from "axios";
import "../styles/JobDetails.css";
import { useNavigate } from 'react-router-dom';


const JobDetails = () => {

  const navigate = useNavigate();

  const userRole = localStorage.getItem("userRole"); // Get user role from local storage
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null); // Store job details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isApplying, setIsApplying] = useState(false); // Applying state

  const navigateToapplications = () => {
    navigate('/applications');
  };



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

  const applyToJob = async () => {
    const studentId = localStorage.getItem("studentId"); // Replace with your logic to get student ID
    const fullName = localStorage.getItem("studentName"); // Replace with logic to get full name
    const email = localStorage.getItem("studentEmail"); // Replace with logic to get email
    const resume = "resume.pdf"; // Placeholder: Replace with uploaded resume logic

    try {
      setIsApplying(true);

      const applicationData = {
        jobId: job.id,
        studentId,
        jobTitle: job.title,
        location: job.location,
        fullName,
        email,
        resume,
        applicationStatus: "Pending",
      };

      const response = await axios.post("http://localhost:8080/applications", applicationData);

      if (response.status === 201) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit the application. Please try again.");
      }
    } catch (error) {
      console.error("Error applying to job:", error);
      alert("An error occurred while applying. Please try again.");
    } finally {
      setIsApplying(false);
    }
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/jobs/${id}`);
        setJob(response.data.job);
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
      <Header_LoggedUser />

      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="details-content">
          <h1>Job Details</h1>
          {job ? (
            <div className="job-card">
              <h2>{job.title}</h2>
              <p>
                <strong>Company Name:</strong> {job.companyName}
              </p>
              <p>
                <strong>Description:</strong> {job.description}
              </p>
              <p>
                <strong>Salary:</strong> ${job.salary}
              </p>
              <p>
                <strong>Experience Level:</strong> {job.experienceLevel}
              </p>
              <p>
                <strong>Application Deadline:</strong>{" "}
                {new Date(job.deadline).toLocaleDateString()}
              </p>
              <p>
                <strong>Job Status:</strong>{" "}
                <span className={`status ${job.jobStatus?.toLowerCase()}`}>
                  {job.jobStatus || "Not specified"}
                </span>
              </p>

              <button className="back-btn" onClick={() => window.history.back()}>
                Back
              </button>

              {userRole === "employer" && (
                <button className="deleteJob-btn" onClick={() => deleteJob()}>
                  Delete Job
                </button>
              )}

              {userRole === "student" && (
                <button
                  className="applyJob-btn"
                  onClick={() => {
                    applyToJob();
                    navigateToapplications();
                  }}
                  disabled={isApplying}
                >
                  {isApplying ? "Applying..." : "Apply to Job"}
                </button>
              )}
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
