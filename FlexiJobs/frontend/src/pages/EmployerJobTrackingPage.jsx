import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser"; 
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/JobTrackingPage.css";

const JobTrackingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { approvedApplication } = location.state || {}; // Get the approved application passed from ApplicationReview

  // State for approved applications
  const [approvedApplications, setApprovedApplications] = useState([]);

  // Fetch jobs data from the backend API
  useEffect(() => {
    const fetchJobs = async () => {
      console.log("Fetching jobs data..."); // Debugging log
      try {
        const response = await fetch("http://localhost:8080/jobs/");
        if (!response.ok) {
          throw new Error(`Failed to fetch jobs: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched jobs data:", data); // Debugging log

        // Map job data to approved applications format
        const jobsData = data.jobs.map((job) => ({
          id: job.id,
          jobTitle: job.title,
          applicantName: job.companyName, // Using companyName for now
          email: job.contactEmail,
          startDate: new Date(job.created_at).toISOString().split("T")[0], // Format as YYYY-MM-DD
          status: job.jobStatus || "Not Started", // Default status
        }));

        setApprovedApplications(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };

    fetchJobs();
  }, []);

  // Add the newly approved application to the list
  useEffect(() => {
    if (approvedApplication) {
      const newApplication = {
        id: approvedApplication.id,
        jobTitle: approvedApplication.jobTitle,
        applicantName: approvedApplication.applicantName,
        email: approvedApplication.email,
        startDate: new Date().toISOString().split("T")[0], // Set start date as today
        status: "Not Started", // Default status
      };
      setApprovedApplications((prev) => [...prev, newApplication]);
    }
  }, [approvedApplication]);

  const handleRowClick = (job) => {
    console.log("Navigating to JobDetailsPage with job data:", job); // Debugging log
    navigate(`/Employer-Job/${job.id}`, { state: { job } }); // Dynamic path with job.id
  };

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
                  <tr
                    key={app.id}
                    onClick={() => handleRowClick(app)}
                    className="clickable-row"
                  >
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
