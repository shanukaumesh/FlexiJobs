import React, { useEffect, useState } from "react";
import Axios from "axios"; // For API requests
import Sidebar from "../components/StudentUIs/Sidebar";
import StatisticsCard from "../components/StudentUIs/StatisticsCard";
import OngoingJobsCard from "../components/StudentUIs/OngoingJobsCard";
import "../styles/StudentUIs/Dashboard.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import LoginIllustration from '../assets/EmployerGroupImage.png';

const StudentDashboard = () => {
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
    const fetchOngoingJobs = async () => {
      console.log("Fetching user data from local storage...");
      
      // Retrieve and parse the user data from localStorage
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData || !userData.email) {
        console.error(
          "User data in localStorage is invalid or missing:",
          userData
        );
        alert("User email not found. Please log in again.");
        return;
      }

      const userEmail = userData.email;
      console.log("User email retrieved successfully:", userEmail);

      try {
        // Fetch ongoing jobs for the user based on their email
        console.log(`Fetching ongoing jobs for email: ${userEmail}`);
        const response = await Axios.get(
          `http://localhost:8002/application-ms/applications?email=${userEmail}`
        );
        console.log("Fetched Ongoing Jobs: ", response.data); // Log the fetched data
        setOngoingJobs(response.data); // Set ongoing jobs to state
      } catch (err) {
        console.error("Error fetching ongoing jobs:", err);
        setError("Failed to fetch ongoing jobs.");
      } finally {
        setLoading(false); // Stop loading in both success and error cases
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
                  <OngoingJobsCard key={index} job={{ ...job, image: LoginIllustration }} />
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
