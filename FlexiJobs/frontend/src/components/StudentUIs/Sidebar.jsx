import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/EmployerUIs/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/student" className="sidebar-link">
        <i className="icon-dashboard" /> Dashboard
      </NavLink>
      <NavLink to="/available-Jobs" className="sidebar-link">
        <i className="icon-post-job" /> Available Jobs
      </NavLink>
      <NavLink to="/applications" className="sidebar-link">
        <i className="icon-applications" />My Applications
      </NavLink>
      <NavLink to="/job-tracking" className="sidebar-link">
        <i className="icon-job-tracking" /> Job Tracking
      </NavLink>
      <NavLink to="/payments" className="sidebar-link">
        <i className="icon-payments" /> Payments
      </NavLink>

      <NavLink to="/settings" className="sidebar-link">
        <i className="icon-payments" /> Settings
      </NavLink>
    </div>
  );
};

export default Sidebar;
