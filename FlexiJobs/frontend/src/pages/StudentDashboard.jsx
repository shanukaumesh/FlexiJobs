import React from "react";
import Sidebar from "../components/StudentUIs/Sidebar";
import StatisticsCard from "../components/StudentUIs/StatisticsCard";
import OngoingJobsCard from "../components/StudentUIs/OngoingJobsCard";
import "../styles/StudentUIs/Dashboard.css";
import Header_LoggedUser from "../components/Header_LoggedUser";

const StudentDashboard = () => {
  const statistics = [
    { title: "Total Post Engage", value: "58" },
    { title: "Applied Jobs", value: "12" },
    { title: "Total Earnings", value: "LKR 20,000.00" },
    { title: "Completed", value: "6" },
  ];

  const ongoingJobs = [
    {
      title: "Accountant",
      location: "Nugegoda, Colombo",
      status: "Ongoing",
      date: "16th September 2026",
      salary: "LKR 2,500",
    },
  ];

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
          {ongoingJobs.map((job, index) => (
            <OngoingJobsCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentDashboard;
