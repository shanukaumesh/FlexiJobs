import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/StudentUIs/AvailableJobs.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import AvailableJobs from "../components/StudentUIs/AvailableJobs"; 
import { useNavigate } from "react-router-dom";

const AvailableJobsPage = () => {
  const [jobs, setJobs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  // Fetch available jobs from the database
  useEffect(() => {
    const fetchJobs = async () => {
      console.log("Starting to fetch available jobs...");
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/job-ms/");
        console.log("API Response:", response.data); 
        setJobs(response.data); 
      } catch (err) {
        console.error("Error fetching available jobs:", err);
        setError("Failed to fetch available jobs. Please try again later.");
      } finally {
        setLoading(false);
        console.log("Finished fetching available jobs.");
      }
    };

    fetchJobs();
  }, []);

  const handleClick = (job) => {
    console.log("Navigating to job details page for job:", job);
    navigate(`/job/${job.id}`, { state: { job } });
  };

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <div className="greeting">
            <h2>Available Jobs</h2>
            <p>Explore job opportunities curated just for you!</p>
          </div>
          <div className="available-jobs-section">
            <h3>Jobs List</h3>
            {loading ? (
              <p>Loading jobs...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : jobs.length > 0 ? (
              <div className="job-list">
                {jobs.map((job, index) => (
                  <AvailableJobs
                    key={index}
                    job={job}
                    onClick={() => handleClick(job)} 
                  />
                ))}
              </div>
            ) : (
              <p>No jobs found.</p>
            )}
          </div>
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default AvailableJobsPage;