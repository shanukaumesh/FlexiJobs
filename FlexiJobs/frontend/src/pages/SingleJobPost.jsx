import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SingleJobPost.css"; // Make sure you have this CSS file for styling
import Header_LoggedUser from "../components/Header_LoggedUser"; // Import the header

const SingleJobPost = () => {
  
  const location = useLocation(); // Retrieve the job data passed through state
  const navigate = useNavigate();
  const { job } = location.state || {}; // Get job data from the state

  // If no job data exists, navigate back or show an error
  if (!job) {
    return (
      <div className="job-not-found">
        <h2>Job Not Found</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  // Handle the Apply Now button click
  const handleApply = () => {
    alert(`You have applied for the ${job.title} position!`); // You can replace this with actual apply functionality
  };

  return (
    <div>
      <Header_LoggedUser />
      <div className="job-post-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Select Location</h3>
          <select className="sort-dropdown">
            <option value="best-match">Best Match</option>
          </select>
          <h4>Location</h4>
          <ul className="location-list">
            <li>Colombo</li>
            <li>Gampaha</li>
            <li>Kaluthara</li>
            <li>Kandy</li>
            <li>Galle</li>
            <li>Show more</li>
          </ul>
        </div>

        {/* Job Post Main */}
        <div className="job-post-main">
          <div className="job-header">
            <button onClick={() => navigate(-1)} className="back-button">
              &#8592; Back
            </button>
            <div className="job-title">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p className="salary">{job.salary}</p>
            </div>
          </div>

          {/* Job Image */}
          <img
            src={job.image}
            alt={`${job.title} Job Illustration`}
            className="job-image"
          />

          {/* Job Description Section */}
          <div className="job-details">
            <h3>Job Description:</h3>
            <p>{job.description}</p>

            <h3>Qualifications:</h3>
            <ul>
              {job.qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Contacts:</h3>
            <p>Phone: {job.contacts.phone}</p>
            <p>Email: {job.contacts.email}</p>

            <button className="apply-button" onClick={handleApply}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobPost;
