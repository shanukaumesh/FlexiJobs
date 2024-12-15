import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../../styles/StudentUIs/StudentSettings.css";
import Header_LoggedUser from "../Header_LoggedUser";
import ChatService from "../ChatService";

const StudentSettings = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  const [timeRange, setTimeRange] = useState({ from: "", to: "" });

  const jobs = ["Driver", "Accountant", "Helper", "Waiter", "Typescript"];

  const handleJobSelection = (job) => {
    setSelectedJobs((prev) =>
      prev.includes(job) ? prev.filter((j) => j !== job) : [...prev, job]
    );
  };

  const handleDaySelection = (day) => {
    setAvailableDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTimeRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert(
      `Settings Saved!\nJobs: ${selectedJobs.join(", ")}\nDays: ${availableDays.join(
        ", "
      )}\nTime: ${timeRange.from} to ${timeRange.to}`
    );
  };

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Student Settings</h2>
          <div className="settings-container">
            {/* Job Preferences */}
            <div className="settings-section">
              <h3>Select Jobs You Want to See in Your Feed Most</h3>
              <div className="job-tags">
                {jobs.map((job, index) => (
                  <button
                    key={index}
                    className={selectedJobs.includes(job) ? "active" : ""}
                    onClick={() => handleJobSelection(job)}
                  >
                    {job}
                  </button>
                ))}
              </div>
            </div>

            <hr />

            {/* Available Days */}
            <div className="settings-section">
              <h3>Select Days That You Are Most Free to Work</h3>
              <div className="days">
                {["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"].map(
                  (day, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        checked={availableDays.includes(day)}
                        onChange={() => handleDaySelection(day)}
                      />
                      {day}
                    </label>
                  )
                )}
              </div>
            </div>

            <hr />

            {/* Time Range */}
            <div className="settings-section">
              <h3>Enter Hours That You Can Work Most</h3>
              <div className="time-range">
                <input
                  type="time"
                  name="from"
                  value={timeRange.from}
                  onChange={handleInputChange}
                />
                <span>to</span>
                <input
                  type="time"
                  name="to"
                  value={timeRange.to}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button className="save-button" onClick={handleSave}>
              Save Settings
            </button>
          </div>
        </div>
      </div>
      <ChatService />
    </div>
  );
};

export default StudentSettings;
