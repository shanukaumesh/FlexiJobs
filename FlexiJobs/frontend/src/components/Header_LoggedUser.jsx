import React from "react";
import "../styles/Header.css";
import userProfileImage from "../assets/userProfile.png";
import { useNavigate } from "react-router-dom";

const Header_LoggedUser = () => {

  const navigate = useNavigate();

  const goToLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Navigate to the login page
    navigate("/login");
  };


  return (
    <header className="header-logout">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <span className="logo-text">Flexi</span>
            <span className="logo-highlight">Jobs</span>
          </a>
        </div>

        <input type="text" className="search-bar" placeholder="Search Jobs" />

        {/* Navigation Menu */}
        <nav>
          <ul className="nav-links">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/jobs">Browse Jobs</a></li>
            <li><a href="/saved-jobs">Saved Jobs</a></li>
          </ul>
        </nav>

        {/* User Actions */}
        <div className="header-actions">
          {/* Notifications */}
          <a href="/notifications" className="notifications-btn">
            <i className="fas fa-bell"></i>
          </a>

          {/* User Profile */}
          <div className="profile-dropdown">
            <img 
              src={userProfileImage} 
              alt="User Avatar" 
              className="user-avatar" 
            />
            <div className="dropdown-content">
              <a href="/profile">My Profile</a>
              <a href="/settings">Settings</a>
              <a onClick={goToLogout}>Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_LoggedUser;
