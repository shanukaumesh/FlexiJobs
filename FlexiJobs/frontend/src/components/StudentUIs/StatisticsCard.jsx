import React from "react";
import "../../styles/StudentUIs/StatisticsCard.css";

const StatisticsCard = ({ title, value }) => {
  return (
    <div className="statistics-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default StatisticsCard;
