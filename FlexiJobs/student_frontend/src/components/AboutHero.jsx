import React from "react";
import "../styles/AboutHero.css";
import aboutBgImage from '../assets/aboutBg.jpg';

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="overlay">
        <div className="content">
          <h1>About Us</h1>
          <p>Home &gt;&gt;&gt; About Us</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
