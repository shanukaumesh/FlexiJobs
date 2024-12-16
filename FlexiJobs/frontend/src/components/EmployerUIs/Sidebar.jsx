import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/EmployerUIs/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/employer" className="sidebar-link">
        <i className="icon-dashboard" /> Dashboard
      </NavLink>
      <NavLink to="/post-job" className="sidebar-link">
        <i className="icon-post-job" /> Post Job
      </NavLink>
      <NavLink to="/applicants" className="sidebar-link">
        <i className="icon-applications" /> Applications
      </NavLink>
      <NavLink to="/job-tracking" className="sidebar-link">
        <i className="icon-job-tracking" /> Job Tracking
      </NavLink>
      <NavLink to="/payments" className="sidebar-link">
        <i className="icon-payments" /> Payments
      </NavLink>
      <NavLink to="/profile-employer" className="sidebar-link">
        <i className="icon-payments" /> Profile
      </NavLink>
    </div>
  );
};

export default Sidebar;
