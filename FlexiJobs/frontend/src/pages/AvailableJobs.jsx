import React from "react";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/StudentUIs/AvailableJobs.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import AvailableJobs from "../components/StudentUIs/AvailableJobs"; // Import the job card component
import LoginIllustration from '../assets/EmployerGroupImage.png'; // Example image import
import { useNavigate } from "react-router-dom";

const AvailableJobsPage = () => {
  const navigate = useNavigate();

  const handleClick = (job) => {
    // Navigate to single job post with state
    navigate(`/job/${job.id}`, { state: { job } });
  };

  const availableJobs = [
    {
      id: "1",
      title: "Driver",
      company: "IWS Holdings",
      location: "Colombo, Nugegoda",
      status: "Open",
      timePeriod: "Full-Time",
      image: LoginIllustration,
    },
    {
      id: "2",
      title: "Waiter",
      company: "Lords Restaurant",
      location: "Colombo, Nugegoda",
      status: "Open",
      timePeriod: "Part-Time",
      image: LoginIllustration,
    },
    {
      id: "3",
      title: "Software Engineer",
      company: "MAS Holdings",
      location: "Kandy, Sri Lanka",
      status: "Open",
      timePeriod: "Full-Time",
      image: LoginIllustration,
    },
  ];

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
            <div className="job-list">
              {availableJobs.map((job, index) => (
                <AvailableJobs
                  key={index}
                  job={job}
                  onClick={() => handleClick(job)} // Pass the job to the handler
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default AvailableJobsPage;
