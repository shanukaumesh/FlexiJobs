import React, { useState } from "react";
import "../styles/SettingsPage.css"; // Add CSS styles for the settings page if needed

const SettingsPage = () => {
  // State for storing form values and managing edit mode
  const [email, setEmail] = useState("john@student.com");
  const [password, setPassword] = useState("********");
  const [notifications, setNotifications] = useState(true);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  // Functions to toggle edit modes
  const toggleEditEmail = () => setEditEmail(!editEmail);
  const toggleEditPassword = () => setEditPassword(!editPassword);

  // Functions to handle changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleNotificationsChange = () => setNotifications(!notifications);

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>

      <div className="settings-section">
        <h3>Change Email</h3>
        <div className="setting-item">
          {editEmail ? (
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="settings-input"
            />
          ) : (
            <p>{email}</p>
          )}
          <button
            onClick={toggleEditEmail}
            className="edit-button"
          >
            {editEmail ? "Save" : "Edit Email"}
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h3>Change Password</h3>
        <div className="setting-item">
          {editPassword ? (
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="settings-input"
            />
          ) : (
            <p>{password}</p>
          )}
          <button
            onClick={toggleEditPassword}
            className="edit-button"
          >
            {editPassword ? "Save" : "Edit Password"}
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h3>Notifications</h3>
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="settings-checkbox"
            />
            Receive Email Notifications
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
