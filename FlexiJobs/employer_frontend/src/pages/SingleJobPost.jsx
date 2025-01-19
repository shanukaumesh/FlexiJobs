import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SingleJobPost.css"; 
import Header_LoggedUser from "../components/Header_LoggedUser";

const SingleJobPost = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [job, setJob] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Fetch job details when the component mounts
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8001/job-ms/jobs/${id}`);
        console.log("API Response:", response.data); 
        setJob(response.data); 
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to load job details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  // Handle the Apply Now button click
  const handleApply = () => {
    alert(`You have applied for the ${job.jobTitle} position!`);
  };

  if (loading) {
    return <p>Loading job details...</p>;
  }

  if (error) {
    return (
      <div className="job-not-found">
        <h2>{error}</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  // Render the job post page if data is available
  return (
    <div>
      <Header_LoggedUser />
      <div className="job-post-container">
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

        <div className="job-post-main">
          <div className="job-header">
            <button onClick={() => navigate(-1)} className="back-button">
              &#8592; Back
            </button>
            <div className="job-title">
              <h2>{job.jobTitle}</h2>
              <p>{job.companyName}</p>
              <p className="salary">{job.salary}</p>
            </div>
          </div>

          <img
            src={job.logo} 
            alt={`${job.jobTitle} Job Illustration`}
            className="job-image"
          />

          <div className="job-details">
            <h3>Job Description:</h3>
            <p>{job.description}</p>

            <h3>Skills:</h3>
            <p>{job.skills}</p>

            <h3>Employment Details:</h3>
            <p>Type: {job.employmentType}</p>
            <p>Experience Level: {job.experienceLevel}</p>

            <h3>Contacts:</h3>
            <p>Phone: Not provided in API</p> {/* You can handle missing fields appropriately */}
            <p>Email: {job.contactEmail}</p>

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
