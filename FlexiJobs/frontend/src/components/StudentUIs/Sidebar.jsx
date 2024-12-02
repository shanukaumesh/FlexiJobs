import React from "react";
import "../../styles/StudentUIs/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>FlexiJobs</h2>
      <ul>
        <li>Dashboard</li>
        <li>Jobs Search</li>
        <li>Job Applications</li>
        <li>Payment Summary</li>
      </ul>
    </div>
  );
};

export default Sidebar;
