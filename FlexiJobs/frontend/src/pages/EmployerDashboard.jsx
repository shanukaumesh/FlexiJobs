import React from "react";
import Sidebar from "../components/EmployerUIs/Sidebar";
import JobCard from "../components/EmployerUIs/JobCard";
import "../styles/EmployerUIs/Dashboard.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";
import LoginIllustration from '../assets/EmployerGroupImage.png';

const EmployerDashboard = () => {
    const jobs = [
        {
          title: "Accountant",
          company: "IVS Holdings",
          location: "Colombo, Nugegoda",
          status: "Active",
          image: LoginIllustration,
        },
        {
          title: "Software Engineer",
          company: "Tech Solutions",
          location: "Colombo 3",
          status: "Active",
          image: LoginIllustration,
        },
        {
          title: "Marketing Specialist",
          company: "Creative Agency",
          location: "Kandy",
          status: "Active",
          image: LoginIllustration,
        },
        {
          title: "Graphic Designer",
          company: "Design Studio",
          location: "Galle",
          status: "Closed",
          image: LoginIllustration,
        },
        {
          title: "Data Analyst",
          company: "Analytics Hub",
          location: "Jaffna",
          status: "Ongoing",
          image: LoginIllustration,
        },
      ];
      
  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Your Jobs</h2>
          <div className="job-list">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default EmployerDashboard;
