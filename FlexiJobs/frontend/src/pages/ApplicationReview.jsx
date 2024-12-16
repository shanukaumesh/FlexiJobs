import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/ApplicationReview.css";

const ApplicationReview = () => {
  const { id } = useParams(); // Extract application ID
  const location = useLocation();
  const navigate = useNavigate();

  // Get the updateStatus function passed via state
  const updateStatus = location.state?.updateStatus;

  // Dummy application for review
  const dummyApplications = [
    { id: 1, jobTitle: "Web Developer", Applicant: "Shanuka", status: "Pending", appliedDate: "2024-12-10" },
    { id: 2, jobTitle: "Graphic Designer", Applicant: "Umesh", status: "Rejected", appliedDate: "2024-12-12" },
    { id: 3, jobTitle: "Content Writer", Applicant: "Dilanjaya", status: "Approved", appliedDate: "2024-12-14" },
  ];

  // Find the application by ID
  const application = dummyApplications.find((app) => app.id === parseInt(id));

  const handleApprove = () => {
    if (application) {
      updateStatus(application.id, "Approved"); // Update status to Approved
      navigate("/job-tracking", { state: { approvedApplication: application } });
    }
  };

  const handleReject = () => {
    if (application) {
      updateStatus(application.id, "Rejected"); // Update status to Rejected
      navigate("/"); // Navigate back to ApplicantPage
    }
  };

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
                  <strong>Applicant Name:</strong> {application.Applicant}
                </p>
                <p>
                  <strong>Status:</strong> {application.status}
                </p>
                <p>
                  <strong>Applied Date:</strong> {application.appliedDate || "N/A"}
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
