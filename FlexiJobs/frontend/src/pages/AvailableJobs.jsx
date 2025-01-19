import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/StudentUIs/AvailableJobs.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import AvailableJobs from "../components/StudentUIs/AvailableJobs";
import { useNavigate } from "react-router-dom";
import JobListDummyPhoto from "../assets/EmployerGroupImage.png"; // Adjust path as necessary

const AvailableJobsPage = () => {
  const userRole = "student"; // Global user role

  useEffect(() => {
    localStorage.setItem("userRole", userRole);
  }, []);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: "true", // Default to show only jobs with status true
    location: "", // Can add filters for other criteria
    jobType: "",
    employerId: "",
  });

  const navigate = useNavigate();

  const handleRowClick = (job) => {
    console.log("Navigating to JobDetailsPage with job data:", job);
    navigate(`/Job/${job.id}`, { state: { job } });
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);

      // Construct the API endpoint based on filters
      const { status, location, jobType, employerId } = filters;
      let url = `http://localhost:8080/jobs/status/${status}`;
      
      if (location) url += `/location/${location}`;
      if (jobType) url += `/jobType/${jobType}`;
      if (employerId) url += `/employer/${employerId}`;
      
      const response = await axios.get(url);
      console.log("Fetched Jobs:", response.data.jobs);

      // Format the jobs data for display
      const formattedJobs = response.data.jobs.map((job) => ({
        id: job.id,
        jobTitle: job.title,
        company: job.companyName,
        location: job.location,
        jobStatus: job.jobStatus || "Not Started",
        deadline: job.deadline,
       image: job.logo && job.logo.trim() ? job.logo : JobListDummyPhoto,
      }));

      setJobs(formattedJobs);
      setError(null);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]); // Refetch jobs whenever filters change

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
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
          
          {/* Filter Section */}
          <div className="filters">
            <select name="status" onChange={handleFilterChange} value={filters.status}>
              <option value="true">Active</option>
            </select>
            <select name="location" onChange={handleFilterChange} value={filters.location}>
              <option value="">All Locations</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              {/* Add more location options */}
            </select>
            <select name="jobType" onChange={handleFilterChange} value={filters.jobType}>
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              {/* Add more job types */}
            </select>
            
          </div>
          
          {/* Jobs List */}
          <div className="available-jobs-section">
            <h3>Jobs List</h3>
            {loading ? (
              <p>Loading jobs...</p>
            ) : error ? (
              <p>{error}</p>
            ) : jobs.length === 0 ? (
              <p>No jobs available.</p>
            ) : (
              <div className="jobs-list">
                {jobs.map((job) => (
                  <AvailableJobs key={job.id} job={job} onClick={() => handleRowClick(job)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default AvailableJobsPage;
