import React from "react";
import "../styles/StatsSection.css";

const statsData = [
  {
    title: "2000+ Qualityful Jobs",
    description: "Our collection will help you to find the best part-time job you are looking for and provide employers best talents.",
  },
  {
    title: "2500 Active Jobs",
    description: "Our collection will help you to find the best part-time job you are looking for and provide employers best talents.",
  },
  {
    title: "1820 Employers",
    description: "Our collection will help you to find the best part-time job you are looking for and provide employers best talents.",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      {statsData.map((stat, index) => (
        <div className="stat-card" key={index}>
          <h2>{stat.title}</h2>
          <p>{stat.description}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
