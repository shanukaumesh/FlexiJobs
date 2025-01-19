import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import axios from "axios";
import "../styles/ApplicationPage.css";

const ApplicationPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userId"); // Get the student ID from localStorage

  useEffect(() => {
    // Fetch applications by student ID
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/applications/student/${userId}`);
        setApplications(response.data.applications || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching applications:", err);
        setError("Failed to fetch applications. Please try again later.");
        setLoading(false);
      }
    };

    fetchApplications();
  }, [userId]);

  if (loading) {
    return <p>Loading applications...</p>;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="application-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="application-content">
          <h1>Job Applications</h1>
          {applications.length > 0 ? (
            <table className="application-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Applied Date</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.jobTitle}</td>
                    <td>{app.location}</td>
                    <td>{app.status ? "Accepted" : "Pending"}</td>
                    <td>{new Date(app.appliedDate).toLocaleDateString()}</td>
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

export default ApplicationPage;
