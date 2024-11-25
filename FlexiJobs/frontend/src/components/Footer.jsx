import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-logo">FlexiJobs</h3>
            <p className="footer-description">
              Your trusted platform to connect with part-time job opportunities.
            </p>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><a href="/jobs">Find Jobs</a></li>
              <li><a href="/employers">For Employers</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/help">Help Center</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>Email: <a href="mailto:support@flexijobs.com">support@flexijobs.com</a></li>
              <li>Phone: +94 123 456 789</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FlexiJobs. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;