import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/StudentUIs/Sidebar";
import Header_LoggedUser from "../components/Header_LoggedUser";
import axios from "axios";
import "../styles/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams(); 
  const [job, setJob] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Fetch job details when the component mounts
  useEffect(() => {
    console.log("Fetching job details for job ID:", id);

    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        console.log("Sending GET request to backend API...");
        const response = await axios.get(`http://localhost:8001/job-ms/jobs/${id}`);
        console.log("API Response received:", response.data);
        setJob(response.data); 
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to load job details. Please try again later.");
      } finally {
        setLoading(false);
        console.log("Finished fetching job details.");
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    console.log("Job details are loading...");
    return <p>Loading job details...</p>;
  }

  if (error) {
    console.log("An error occurred:", error);
    return (
      <div className="job-details-error">
        <h2>{error}</h2>
        <button className="back-btn" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    );
  }

  console.log("Rendering job details for:", job);

  const formattedDeadline = new Date(job.deadline).toISOString().split("T")[0];

  return (
    <div className="job-details-page">
      {/* Header */}
      <Header_LoggedUser />

      {/* Main content container */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Job details */}
        <div className="job-details-content">
          <h1>{job.jobTitle}</h1>
          <p><strong>Company:</strong> {job.companyName}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Status:</strong> {job.status ? "Active" : "Inactive"}</p>
          <p><strong>Application Deadline:</strong> {formattedDeadline || "Not specified"}</p>
          <img
            src={job.logo} // Assuming `logo` contains the image URL
            alt={job.jobTitle}
            className="job-image"
          />
          <p>{job.description}</p>

          {/* Back button */}
          <button className="back-btn" onClick={() => window.history.back()}>
            Back
          </button>

          {/* Apply link */}
          <Link
            to="/apply"
            state={{ job }} // Passing job details to the ApplyJob component
          >
            <button className="apply-btn">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
