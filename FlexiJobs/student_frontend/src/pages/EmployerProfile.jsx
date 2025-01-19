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
      // Retrieve the user ID from local storage
      const userId = localStorage.getItem("userId");

      // Console log the retrieved user ID
      console.log("User ID:", userId);

      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/employers/${userId}`
        );
        console.log("Fetched Profile:", response.data); // Log the response data

        // Set profile state with fetched employer data
        setProfile(response.data.employer);
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
                  src={profile.logo || "/default-avatar.png"} // Use default image if logo is null
                  alt="Profile"
                  className="profile-picture"
                />
                <div className="profile-details">
                  <h3>
                    {profile.firstName} {profile.lastName}
                  </h3>
                  <p>{profile.email}</p>
                  <p>{profile.webUrl || "Website not provided"}</p>
                </div>
              </div>

              {/* Profile Stats */}
              <div className="profile-stats">
                <div className="stat-card">
                  <h4>Status</h4>
                  <p>{profile.status ? "Active" : "Inactive"}</p>
                </div>
                <div className="stat-card">
                  <h4>Created At</h4>
                  <p>{new Date(profile.created_at).toLocaleDateString()}</p>
                </div>
                <div className="stat-card">
                  <h4>Updated At</h4>
                  <p>{new Date(profile.updated_at).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Bio Section */}
              <div className="profile-bio">
                <h4>About Me</h4>
                <p>
                  {profile.bio ||
                    "No bio available. Update your profile to add more details about yourself."}
                </p>
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
