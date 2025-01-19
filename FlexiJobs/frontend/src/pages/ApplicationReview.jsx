import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import axios from "axios";
import "../styles/ApplicationReview.css";

const ApplicationReview = () => {
  const { id } = useParams(); // Extract application ID from URL
  const location = useLocation(); // Access data passed via state
  const navigate = useNavigate();
  const [application, setApplication] = useState(location.state?.application || null); // Use passed data or null
  const [loading, setLoading] = useState(!location.state?.application); // Skip loading if data is passed
  const [error, setError] = useState(null);

  // Fetch application details from the backend if not passed via state
  const fetchApplicationDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/applications/${id}`);
      setApplication(response.data.application);
    } catch (err) {
      console.error("Error fetching application:", err);
      setError("Failed to fetch application details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Update application status
  const updateStatus = async (newStatus) => {
    try {
      const response = await axios.patch(`http://localhost:8080/applications/${id}`, {
        status: newStatus,
      });
      console.log(`Application status updated to: ${newStatus}`);
      setApplication((prev) => ({
        ...prev,
        status: response.data.application.status,
      })); // Update local state
    } catch (error) {
      console.error("Error updating status:", error);
      throw new Error("Failed to update application status.");
    }
  };

  const handleApprove = async () => {
    try {
      await updateStatus("Approved"); // Mark as Approved
      alert("Application approved successfully!");
      navigate("/job-tracking", { state: { approvedApplication: application } }); // Pass data to JobTracking
    } catch (error) {
      alert("Failed to approve the application. Please try again.");
    }
  };

  const handleReject = async () => {
    try {
      await updateStatus("Rejected"); // Mark as Rejected
      alert("Application rejected successfully!");
      navigate("/"); // Navigate back to ApplicantPage
    } catch (error) {
      alert("Failed to reject the application. Please try again.");
    }
  };

  useEffect(() => {
    if (!application) {
      fetchApplicationDetails(); // Fetch details only if not passed via state
    }
  }, [id, application]);

  if (loading) {
    return <p>Loading application details...</p>;
  }

  if (error) {
    return (
      <div className="application-review-error">
        <h2>{error}</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          {application ? (
            <div className="application-review">
              <h1>Application Review</h1>
              <div className="application-details">
                <h2>{application.jobTitle}</h2>
                <p>
                  <strong>Applicant Name:</strong> {application.fullName}
                </p>
                <p>
                  <strong>Status:</strong> {application.status}
                </p>
                <p>
                  <strong>Applied Date:</strong>{" "}
                  {new Date(application.appliedDate).toLocaleDateString() || "N/A"}
                </p>
              </div>
              <div className="review-actions">
                <h3>Take Action</h3>
                <button className="btn-approve" onClick={handleApprove}>
                  Approve
                </button>
                <button className="btn-reject" onClick={handleReject}>
                  Reject
                </button>
              </div>
            </div>
          ) : (
            <p>No application details found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
