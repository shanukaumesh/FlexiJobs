import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/EmployerUIs/Sidebar";
import JobCard from "../components/EmployerUIs/JobCard";
import "../styles/EmployerUIs/Dashboard.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]); // State to store jobs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8001/job-ms/jobs");
        console.log("API Response:", response.data);
        setJobs(response.data); // Set jobs from API response
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs(); // Fetch jobs on component mount
  }, []);

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Your Jobs</h2>
          {loading ? (
            <p>Loading jobs...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : jobs.length > 0 ? (
            <div className="job-list">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default EmployerDashboard;
