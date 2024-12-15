import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/EmployerUIs/EmployerProfile.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";

const AdvancedEmployerProfile = () => {
  const [profile, setProfile] = useState(null); // State to store employer profile
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProfile = async () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData || !userData.email) {
        console.error("User email not found in localStorage.");
        alert("User email not found. Please log in again.");
        return;
      }

      const userEmail = userData.email;
      console.log(`Fetching profile for: ${userEmail}`);

      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8001/employer-ms/profile?email=${userEmail}`
        );
        console.log("Fetched Profile:", response.data); // Log profile data
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to fetch profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Employer Profile</h2>
          {loading ? (
            <p>Loading profile...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : profile ? (
            <div className="profile-container">
              {/* Profile Header */}
              <div className="profile-header">
                <img
                  src={profile.profilePicture || "/default-avatar.png"}
                  alt="Profile"
                  className="profile-picture"
                />
                <div className="profile-details">
                  <h3>{profile.name || "Employer Name"}</h3>
                  <p>{profile.email || "Email not provided"}</p>
                  <p>{profile.company || "Company not specified"}</p>
                </div>
              </div>

              {/* Profile Stats */}
              <div className="profile-stats">
                <div className="stat-card">
                  <h4>Jobs Posted</h4>
                  <p>{profile.jobsPosted || 0}</p>
                </div>
                <div className="stat-card">
                  <h4>Active Jobs</h4>
                  <p>{profile.activeJobs || 0}</p>
                </div>
              </div>

              {/* Bio Section */}
              <div className="profile-bio">
                <h4>About Me</h4>
                <p>{profile.bio || "Bio not provided"}</p>
              </div>

              <button className="update-button">Update Profile</button>
            </div>
          ) : (
            <p>No profile information found.</p>
          )}
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default AdvancedEmployerProfile;
