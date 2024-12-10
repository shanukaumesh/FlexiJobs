import React from "react";
import "../styles/HeroSection.css"; // Import CSS for styling
import studentImage from "../assets/heroSectionMain.png"; // Replace with the actual image file path
import chartIcon from "../assets/chart.png"; // Replace with the actual chart icon file path

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Connecting students with <span className="highlight">opportunities</span> and employers with the right <span className="highlight">talent</span>
        </h1>
        <p>
          Connecting university students with flexible part-time job opportunities to build their future, while helping employers find the right talent.
        </p>
        <div className="qualifications">
          <h3>Job Qualifications</h3>
          <div className="progress-circle">
            <span>80%</span>
          </div>
        </div>
        <button className="cta-button" onClick={() => window.location.href = "/login"}>
          Let's Get Started
        </button>
      </div>
      <div className="hero-image">
        <img src={studentImage} alt="Student working on a laptop" className="main-image" />
        <div className="overlay-text">Find a part-time job you want</div>
        <img src={chartIcon} alt="Increase your skills" className="chart-icon" />
      </div>
    </section>
  );
};

export default HeroSection;
