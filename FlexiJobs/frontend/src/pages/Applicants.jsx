import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/ApplicantPage.css";

const ApplicantPage = () => {
  // State for storing applications
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Initialize navigate function

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

  // Function to handle the "Review" button click
  const handleViewApplication = (application) => {
    console.log("Navigating to ApplicationReview with application data:", application);
    navigate(`/application-review/${application.id}`, {
      state: { application }, // Pass the application data to the review page
    });
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
                  <th>Applied Date</th>
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
                        <button
                          className="review-button"
                          onClick={() => handleViewApplication(app)}
                        >
                          Review
                        </button>
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
