import React from "react";
import "../styles/Header.css";

const Header_LogOutUser = () => {
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

        {/* Navigation Menu */}
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/jobs">Browse Jobs</a></li>
            <li><a href="/jobs">For Employers</a></li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <a href="/login" className="login-btn">Login</a>
          <a href="/register" className="cta-btn">Register</a>
        </div>
      </div>
    </header>
  );
};

export default Header_LogOutUser;
