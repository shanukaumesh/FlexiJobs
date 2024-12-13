import React, { useEffect, useState } from "react";
import Axios from "axios"; 
import Sidebar from "../components/StudentUIs/Sidebar";
import StatisticsCard from "../components/StudentUIs/StatisticsCard";
import OngoingJobsCard from "../components/StudentUIs/OngoingJobsCard";
import "../styles/StudentUIs/Dashboard.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import LoginIllustration from '../assets/EmployerGroupImage.png';

const StudentDashboard = () => {
  const [ongoingJobs, setOngoingJobs] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const statistics = [
    { title: "Total Post Engage", value: "58" },
    { title: "Applied Jobs", value: "12" },
    { title: "Total Earnings", value: "LKR 20,000.00" },
    { title: "Completed", value: "6" },
  ];

  useEffect(() => {
    Axios.get("http://localhost:8002/application-ms/applications")
      .then((response) => {
        console.log("Fetched Data: ", response.data);
        setOngoingJobs(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ongoing jobs:", error);
        setLoading(false); 
      });
  }, []); 

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
            ) : (
              <div className="job-list">
                {ongoingJobs.length > 0 ? (
                  ongoingJobs.map((job, index) => (
                    <OngoingJobsCard key={index} job={{ ...job, image: LoginIllustration }} />
                  ))
                ) : (
                  <p>No ongoing jobs available.</p> 
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default StudentDashboard;
