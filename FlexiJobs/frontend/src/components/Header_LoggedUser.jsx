import React from "react";
import "../styles/Header.css";
import userProfileImage from "../assets/userProfile.png";

const Header_LoggedUser = () => {
  return (
    <header className="header logged-in">
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
        <nav className="nav">
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
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_LoggedUser;
