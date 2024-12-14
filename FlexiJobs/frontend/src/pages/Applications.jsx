import React from "react";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/ApplicationPage.css"; // Separate CSS file for styling

const ApplicationPage = () => {
  // Mock data for applications (replace with API call data)
  const applications = [
    {
      id: 1,
      jobTitle: "Software Developer",
      company: "TechCorp",
      status: "Pending",
      appliedDate: "2024-12-10",
    },
    {
      id: 2,
      jobTitle: "Marketing Intern",
      company: "BrandX",
      status: "Accepted",
      appliedDate: "2024-12-12",
    },
  ];

  return (
    <div className="application-page">
      {/* Header */}
      <Header_LoggedUser />

      {/* Main content container */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Applications List */}
        <div className="application-content">
          <h1>My Applications</h1>

          {/* Application List Table */}
          <table className="application-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Status</th>
                <th>Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.jobTitle}</td>
                  <td>{app.company}</td>
                  <td>{app.status}</td>
                  <td>{app.appliedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
