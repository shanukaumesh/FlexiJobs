import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../EmployerUIs/Sidebar";
import "../../styles/EmployerUIs/EmployerSettings.css";
import Header_LoggedUser from "../Header_LoggedUser";
import ChatService from "../ChatService";
 
const EmployerSettings = () => {
  const [employerProfile, setEmployerProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData || !userData.email) {
        console.error("User email not found in localStorage.");
        alert("User email not found. Please log in again.");
        return;
      }

      const userEmail = userData.email;
      console.log(`Fetching employer profile for: ${userEmail}`);

      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8001/employer-ms/profile?email=${userEmail}`
        );
        console.log("Fetched Employer Profile:", response.data);
        setEmployerProfile(response.data);
      } catch (err) {
        console.error("Error fetching employer profile:", err);
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
    setEmployerProfile(editProfile);
    setIsEditing(false);
  };

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Employer Settings</h2>
          {loading ? (
            <p>Loading profile...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : employerProfile ? (
            <div className="profile-container">
              {isEditing ? (
                <div className="edit-profile">
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                      type="text"
                      name="companyName"
                      value={editProfile.companyName || employerProfile.companyName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio">About Company:</label>
                    <textarea
                      name="bio"
                      value={editProfile.bio || employerProfile.bio}
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
                      src={employerProfile.logo || "/default-logo.png"}
                      alt="Company Logo"
                      className="company-logo"
                    />
                    <div className="profile-details">
                      <h3>{employerProfile.companyName || "Company Name"}</h3>
                      <p>{employerProfile.email || "Email not provided"}</p>
                    </div>
                  </div>

                  {/* Profile Stats */}
                  <div className="profile-stats">
                    <div className="stat-card">
                      <h4>Active Jobs</h4>
                      <p>{employerProfile.activeJobs || 0}</p>
                    </div>
                    <div className="stat-card">
                      <h4>Hired Workers</h4>
                      <p>{employerProfile.hiredWorkers || 0}</p>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="profile-bio">
                    <h4>About Company</h4>
                    <p>{employerProfile.bio || "Bio not provided"}</p>
                  </div>

                  <button
                    className="update-button"
                    onClick={() => {
                      setIsEditing(true);
                      setEditProfile(employerProfile);
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

export default EmployerSettings;
