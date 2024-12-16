import React from "react";
import { useParams } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/ApplicationReview.css";

const ApplicationReview = () => {
  const { id } = useParams(); // Extract the application ID from the URL

  // Dummy data for a single application
  const dummyApplication = {
    id,
    jobTitle: "Web Developer",
    applicantName: "John Doe",
    email: "johndoe@example.com",
    location: "Colombo",
    status: true,
    appliedDate: "2024-12-10",
    description: "Experienced in React and Node.js.",
  };

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          {dummyApplication ? (
            <div className="application-review">
              <h1>Application Review</h1>
              <div className="application-details">
                <h2>{dummyApplication.jobTitle}</h2>
                <p>
                  <strong>Applicant Name:</strong> {dummyApplication.applicantName}
                </p>
                <p>
                  <strong>Email:</strong> {dummyApplication.email}
                </p>
                <p>
                  <strong>Location:</strong> {dummyApplication.location}
                </p>
                <p>
                  <strong>Status:</strong> {dummyApplication.status ? "Accepted" : "Pending"}
                </p>
                <p>
                  <strong>Applied Date:</strong> {dummyApplication.appliedDate || "N/A"}
                </p>
                <p>
                  <strong>Description:</strong> {dummyApplication.description}
                </p>
              </div>
              <div className="review-actions">
                <h3>Take Action</h3>
                <button className="btn-approve">Approve</button>
                <button className="btn-reject">Reject</button>
              </div>
              <div className="additional-notes">
                <h3>Notes</h3>
                <textarea
                  placeholder="Add your notes about the application..."
                  rows="5"
                ></textarea>
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
