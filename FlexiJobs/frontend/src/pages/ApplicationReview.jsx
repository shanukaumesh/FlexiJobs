import React from "react";
import { useParams } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/ApplicationReview.css";

const ApplicationReview = () => {
  const { id } = useParams(); // Extract the application ID from the URL

  // Dummy data for applications
  const dummyApplications = [
    { id: 1, jobTitle: "Web Developer", applicantName: "Shanuka", email: "shanuka@example.com", location: "Colombo", status: true, appliedDate: "2024-12-10", description: "Experienced in React and Node.js." },
    { id: 2, jobTitle: "Graphic Designer", applicantName: "Umesh", email: "umesh@example.com", location: "Kandy", status: false, appliedDate: "2024-12-12", description: "Proficient in Photoshop and Illustrator." },
    { id: 3, jobTitle: "Content Writer", applicantName: "Dilanjaya", email: "dilanjaya@example.com", location: "Galle", status: true, appliedDate: "2024-12-14", description: "Expert in SEO writing and blogging." },
  ];

  // Find the specific application based on the ID
  const application = dummyApplications.find((app) => app.id === parseInt(id));

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
                  <strong>Applicant Name:</strong> {application.applicantName}
                </p>
                <p>
                  <strong>Email:</strong> {application.email}
                </p>
                <p>
                  <strong>Location:</strong> {application.location}
                </p>
                <p>
                  <strong>Status:</strong> {application.status ? "Accepted" : "Pending"}
                </p>
                <p>
                  <strong>Applied Date:</strong> {application.appliedDate || "N/A"}
                </p>
                <p>
                  <strong>Description:</strong> {application.description}
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
