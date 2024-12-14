import React, { useEffect, useState } from "react";
import Axios from "axios"; // For API requests
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/ApplicationPage.css"; // Separate CSS file for styling

const ApplicationPage = () => {
  const [applications, setApplications] = useState([]); // State to store applications
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchApplications = async () => {
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
        // Fetch applications for the user based on their email
        console.log(`Fetching applications for email: ${userEmail}`);
        const response = await Axios.get(
          `http://localhost:8002/application-ms/applications?email=${userEmail}`
        );
        console.log("Fetched Applications: ", response.data); // Log the fetched applications
        setApplications(response.data); // Set applications to state
      } catch (err) {
        console.error("Error fetching applications: ", err);
        setError("Failed to fetch applications.");
      } finally {
        setLoading(false); // Stop loading in both success and error cases
      }
    };

    fetchApplications();
  }, []); // Run only once after initial render

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

          {/* Handle Loading, Error, and Applications List */}
          {loading ? (
            <p>Loading applications...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : applications.length > 0 ? (
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
                    <td>{app.appliedDate || "N/A"}</td>
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
