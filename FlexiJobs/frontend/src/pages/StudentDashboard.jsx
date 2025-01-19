import React, { useEffect, useState } from "react"; 
import Sidebar from "../components/StudentUIs/Sidebar";
import StatisticsCard from "../components/StudentUIs/StatisticsCard";
import OngoingJobsCard from "../components/StudentUIs/OngoingJobsCard";
import "../styles/StudentUIs/Dashboard.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import LoginIllustration from '../assets/EmployerGroupImage.png';

const StudentDashboard = () => {

   const userRole = "student"; // Global user role
  
    useEffect(() => {
      localStorage.setItem("userRole", userRole);
    }, []);
  

  const [ongoingJobs, setOngoingJobs] = useState([]); // State to store ongoing jobs
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  const statistics = [
    { title: "Total Post Engage", value: "58" },
    { title: "Applied Jobs", value: "12" },
    { title: "Total Earnings", value: "LKR 20,000.00" },
    { title: "Completed", value: "6" },
  ];

  useEffect(() => {
    // Fetch ongoing jobs data from API
    const fetchOngoingJobs = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch("http://localhost:8080/jobs/");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        // Map fetched jobs to match the format required for the component
        const jobsData = data.jobs.map((job) => ({
          id: job.id,
          title: job.title,
          company: job.companyName,
          status: job.jobStatus || "Ongoing",
          image: job.logo && job.logo.trim() ? job.logo : LoginIllustration,
        }));
        
        setOngoingJobs(jobsData); // Set fetched data
        setError(null); // Clear any existing error
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Unable to load ongoing jobs. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchOngoingJobs();
  }, []); // Run only once after initial render

  return (
    <div>
      <Header_LoggedUser /> 
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <div className="greeting">
            <h2>Hi Aloka De Silva</h2>
            <p>Good Evening!</p>
          </div>
          <div className="statistics-section">
            {statistics.map((stat, index) => (
              <StatisticsCard key={index} title={stat.title} value={stat.value} />
            ))}
          </div>
          <div className="ongoing-jobs-section">
            <h3>Ongoing Jobs</h3>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="error-message">{error}</p>
            ) : ongoingJobs.length > 0 ? (
              <div className="job-list">
                {ongoingJobs.map((job, index) => (
                  <OngoingJobsCard key={index} job={job} />
                ))}
              </div>
            ) : (
              <p>No ongoing jobs available.</p>
            )}
          </div>
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default StudentDashboard;
