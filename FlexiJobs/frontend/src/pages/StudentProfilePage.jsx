import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/StudentUIs/StudentProfile.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import ChatService from "../components/ChatService";

const AdvancedStudentProfile = () => {
  const [profile, setProfile] = useState(null); // State to store student profile
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isEditing, setIsEditing] = useState(false); // Editing mode toggle
  const [editProfile, setEditProfile] = useState({}); // Temporary state for editing

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
          `http://localhost:8001/student-ms/profile?email=${userEmail}`
        );
        console.log("Fetched Profile:", response.data);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Student Profile</h2>
          {loading ? (
            <p>Loading profile...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : profile ? (
            <div className="profile-container">
              {isEditing ? (
                <div className="edit-profile">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={editProfile.name || profile.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                      name="bio"
                      value={editProfile.bio || profile.bio}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <button className="save-button" onClick={handleSave}>
                    Save
                  </button>
                </div>
              ) : (
                <>
                  {/* Profile Header */}
                  <div className="profile-header">
                    <img
                      src={profile.profilePicture || "/default-avatar.png"}
                      alt="Profile"
                      className="profile-picture"
                    />
                    <div className="profile-details">
                      <h3>{profile.name || "Student Name"}</h3>
                      <p>{profile.email || "Email not provided"}</p>
                    </div>
                  </div>

                  {/* Profile Stats */}
                  <div className="profile-stats">
                    <div className="stat-card">
                      <h4>Jobs Completed</h4>
                      <p>{profile.jobsCompleted || 0}</p>
                    </div>
                    <div className="stat-card">
                      <h4>Ongoing Jobs</h4>
                      <p>{profile.ongoingJobs || 0}</p>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="profile-bio">
                    <h4>About Me</h4>
                    <p>{profile.bio || "Bio not provided"}</p>
                  </div>

                  <button
                    className="update-button"
                    onClick={() => {
                      setIsEditing(true);
                      setEditProfile(profile);
                    }}
                  >
                    Update Profile
                  </button>
                </>
              )}
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

export default AdvancedStudentProfile;
