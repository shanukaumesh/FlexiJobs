import React from 'react';
import '../styles/Home.css'; // Updated import path for the CSS


const Home = () => {
    return (
      <div className="home-container">
        {/* Header Section */}
        <header className="header">
          <nav className="nav">
            <div className="logo">Flexi<span className="blue">Jobs</span></div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#jobs">Browse Jobs</a></li>
              <li><a href="#employers">For Employers</a></li>
            </ul>
            <div className="auth-buttons">
              <a href="#login" className="login-btn">Login</a>
              <a href="#find-job" className="find-job-btn">Find a Job</a>
            </div>
          </nav>
        </header>
  
        {/* Main Section */}
        <main className="main-section">
          <div className="text-content">
            <h1>
              Connecting students with <span className="highlight">opportunities</span> and 
              employers with the right <span className="highlight">talent</span>
            </h1>
            <p>
              Connecting university students with flexible part-time job opportunities 
              to build their future, while helping employers find the right talent.
            </p>
            <div className="job-qualifications">
              <p>Job Qualifications</p>
              <div className="qualification-circle">
                <span>80%</span>
              </div>
            </div>
            <a href="#get-started" className="get-started-btn">Let's Get Started</a>
          </div>
  
          <div className="image-content">
            <img src="path/to/student-image.png" alt="Student Working" />
            <div className="bubble">
              <p>Find a part time job you want</p>
            </div>
          </div>
        </main>
  
        {/* Job Stats Section */}
        <section className="stats-section">
          <div className="stat-box">
            <h3>2000+ Qualityful Jobs</h3>
            <p>Our collection will help you find the best part time job you are looking for and provide employers with the best talents.</p>
          </div>
          <div className="stat-box">
            <h3>2500 Active Jobs</h3>
            <p>Our collection will help you find the best part time job you are looking for and provide employers with the best talents.</p>
          </div>
          <div className="stat-box">
            <h3>1820 Employers</h3>
            <p>Our collection will help you find the best part time job you are looking for and provide employers with the best talents.</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;