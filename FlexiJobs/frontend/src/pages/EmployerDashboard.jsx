import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import axios from "axios";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/EmployerUIs/Dashboard.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import JobCard from "../components/EmployerUIs/JobCard"; // Ensure this component is styled appropriately
import JobListDummyPhoto from "../assets/EmployerGroupImage.png"; // Fallback logo



const EmployerDashboard = () => {

  const userRole = "employer"; // Global user role

  useEffect(() => {
    localStorage.setItem("userRole", userRole);
  }, []);

  const [jobs, setJobs] = useState([]); // State to store jobs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Hook for navigation

  const handleRowClick = (job) => {
    console.log("Navigating to JobDetailsPage with job data:", job); // Debugging log
    navigate(`/Job/${job.id}`, { state: { job } }); // Dynamic path with job.id
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const userId = 1; // Replace with actual logic to fetch the employer's userId
      console.log("User ID:", userId);

      try {
        setLoading(true); // Start loading
        const response = await axios.get(
          `http://localhost:8080/jobs/employer/${userId}`
        );
        console.log("Fetched Jobs:", response.data.jobs);
        
        // Format the jobs data for display
        const formattedJobs = response.data.jobs.map((job) => ({
          id: job.id,
          title: job.title,
          company: job.companyName, 
          location: job.location,
          salary: job.salary,
          jobType: job.jobType,
          status: job.jobStatus || "Not Started",
          image: job.logo && job.logo.trim() ? job.logo : JobListDummyPhoto,
        }));

        setJobs(formattedJobs);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
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
            <p className="error-message">{error}</p>
          ) : jobs.length > 0 ? (
            <div className="job-list">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  onClick={() => handleRowClick(job)} // Add onClick handler for navigation
                  style={{ cursor: "pointer" }} // Visual indication of clickable item
                >
                  <JobCard job={job} />
                </div>
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
