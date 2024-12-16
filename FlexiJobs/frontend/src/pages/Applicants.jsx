import React from "react";
import { Link } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/ApplicantPage.css";

const ApplicantPage = () => {
  // Dummy data for applications
  const dummyApplications = [
    { id: 1, jobTitle: "Web Developer", Applicant: "Shanuka", status: true, appliedDate: "2024-12-10" },
    { id: 2, jobTitle: "Graphic Designer", Applicant: "Umesh", status: false, appliedDate: "2024-12-12" },
    { id: 3, jobTitle: "Content Writer", Applicant: "Dilanjaya", status: true, appliedDate: "2024-12-14" },
  ];

  return (
    <div className="application-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="application-content">
          <h1>My Applications</h1>
          {dummyApplications.length > 0 ? (
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
                {dummyApplications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.jobTitle}</td>
                    <td>{app.Applicant}</td>
                    <td>{app.status ? "Accepted" : "Pending"}</td>
                    <td>{app.appliedDate}</td>
                    <td>
                      {/* Link to navigate to the review page */}
                      <Link to={`/application-review/${app.id}`}>View</Link>
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
