import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/ApplicantPage.css";

const ApplicantPage = () => {
  // Applications with three status types
  const [applications, setApplications] = useState([
    { id: 1, jobTitle: "Web Developer", Applicant: "Shanuka", status: "Pending", appliedDate: "2024-12-10" },
    { id: 2, jobTitle: "Graphic Designer", Applicant: "Umesh", status: "Rejected", appliedDate: "2024-12-12" },
    { id: 3, jobTitle: "Content Writer", Applicant: "Dilanjaya", status: "Approved", appliedDate: "2024-12-14" },
  ]);

  // Function to update the application status dynamically
  const updateApplicationStatus = (id, newStatus) => {
    setApplications((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div className="application-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="application-content">
          <h1>My Applications</h1>
          {applications.length > 0 ? (
            <table className="application-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Applicant</th>
                  <th>Status</th>
                  <th>Applied Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.jobTitle}</td>
                    <td>{app.Applicant}</td>
                    <td>{app.status}</td>
                    <td>{app.appliedDate}</td>
                    <td>
                      {app.status === "Pending" && (
                        <Link
                          to={`/application-review/${app.id}`}
                          state={{
                            application: app, // Pass the full application object
                            updateStatus: updateApplicationStatus,
                          }}
                        >
                          View
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No applications found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicantPage;
