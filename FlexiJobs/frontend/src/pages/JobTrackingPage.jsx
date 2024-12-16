import React from "react";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/JobTrackingPage.css";

const JobTrackingPage = () => {
  // Dummy data for approved applications
  const approvedApplications = [
    {
      id: 1,
      jobTitle: "Web Developer",
      applicantName: "John Doe",
      email: "johndoe@example.com",
      startDate: "2024-12-15",
      status: "In Progress",
    },
    {
      id: 2,
      jobTitle: "Graphic Designer",
      applicantName: "Jane Smith",
      email: "janesmith@example.com",
      startDate: "2024-12-14",
      status: "Completed",
    },
    {
      id: 3,
      jobTitle: "Content Writer",
      applicantName: "Robert Johnson",
      email: "robertjohnson@example.com",
      startDate: "2024-12-16",
      status: "In Progress",
    },
  ];

  return (
    <div className="job-tracking-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="tracking-content">
          <h1>Job Tracking</h1>
          {approvedApplications.length > 0 ? (
            <table className="tracking-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Applicant Name</th>
                  <th>Email</th>
                  <th>Start Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {approvedApplications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.jobTitle}</td>
                    <td>{app.applicantName}</td>
                    <td>{app.email}</td>
                    <td>{app.startDate}</td>
                    <td>{app.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No approved applications found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobTrackingPage;
