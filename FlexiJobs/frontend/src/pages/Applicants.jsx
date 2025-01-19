import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/ApplicantPage.css";

const ApplicantPage = () => {
  // State for storing applications
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch applications data from the backend API
  useEffect(() => {
    const fetchApplications = async () => {
      console.log("Fetching applications..."); // Step 1: Fetch initiated
      try {
        const response = await fetch("http://localhost:8080/applications/");
        console.log("API Response:", response); // Step 2: Log response object

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data); // Step 3: Log the JSON response

        if (data && data.applications) { 
          setApplications(data.applications); // Set the 'applications' array
          console.log("Applications Set:", data.applications);
        } else {
          console.error("Data format incorrect:", data);
          setError("Unexpected data format received.");
        }
      } catch (err) {
        console.error("Error fetching data:", err.message); // Step 4: Log fetch errors
        setError("Unable to load applications. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
        console.log("Fetch process completed."); // Step 5: End of fetch process
      }
    };

    fetchApplications();
  }, []);

  // Function to update the application status dynamically
  const updateApplicationStatus = (id, newStatus) => {
    setApplications((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, applicationStatus: newStatus } : app
      )
    );
    console.log(`Application ID ${id} updated to status: ${newStatus}`);
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
          {loading ? (
            <p>Loading applications...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : applications.length > 0 ? (
            <table className="application-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.jobTitle}</td>
                    <td>{app.fullName}</td>
                    <td>{app.email}</td>
                    <td>{app.applicationStatus}</td>
                    <td>{new Date(app.created_at).toLocaleDateString()}</td>
                    <td>
                      {app.applicationStatus === "Pending" && (
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
