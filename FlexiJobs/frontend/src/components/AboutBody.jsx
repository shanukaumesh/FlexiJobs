import React from "react";
import "../styles/AboutBody.css";
import imageStudent from '../assets/heroSectionMain.png';
import aboutBgImage from '../assets/aboutBg.jpg';

const AboutBody = () => {
  return (
    <div className="about-body">
      {/* About Us Section */}
      <section className="about-intro">
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate professionals dedicated to connecting
          students with the right opportunities and employers with the best
          talents. Our mission is to provide flexible, part-time job
          opportunities for university students while empowering employers to
          find skilled candidates efficiently.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To revolutionize the part-time job market by bridging the gap
            between students and employers. We aim to provide a seamless,
            user-friendly platform that helps students build their futures
            while fulfilling the needs of employers with skilled, motivated
            candidates.
          </p>
        </div>
        <div className="mission-image">
          <img
            src= {imageStudent}
            alt="Teamwork"
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-cards">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We believe in honesty, transparency, and doing the right thing
              for our users and community.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Constantly improving and delivering modern, effective solutions
              for the ever-changing job market.
            </p>
          </div>
          <div className="value-card">
            <h3>Empowerment</h3>
            <p>
              Helping students and employers achieve their goals by providing
              the tools and resources they need to succeed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBody;
