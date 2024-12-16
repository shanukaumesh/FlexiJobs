import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/StudentUIs/Sidebar";
import "../styles/StudentJobTracking.css";

const StudentJobTracking = () => {
  // Example list of jobs assigned to the student
  const [studentJobs, setStudentJobs] = useState([
    {
      id: 1,
      jobTitle: "Web Developer",
      employer: "ABC Tech",
      startDate: "2024-12-10",
      status: "Completed",
    },
    {
      id: 2,
      jobTitle: "Content Writer",
      employer: "XYZ Media",
      startDate: "2024-12-12",
      status: "Ongoing",
    },
    {
      id: 3,
      jobTitle: "Graphic Designer",
      employer: "Creative Studio",
      startDate: "2024-12-14",
      status: "Not Started",
    },
  ]);

  return (
    <div className="student-job-tracking-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="job-tracking-content">
          <h1>My Jobs</h1>
          {studentJobs.length > 0 ? (
            <table className="job-tracking-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Employer</th>
                  <th>Start Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {studentJobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.jobTitle}</td>
                    <td>{job.employer}</td>
                    <td>{job.startDate}</td>
                    <td
                      className={`status ${
                        job.status === "Completed"
                          ? "status-completed"
                          : job.status === "Ongoing"
                          ? "status-ongoing"
                          : "status-not-started"
                      }`}
                    >
                      {job.status}
                    </td>
                    <td>
                      <Link to={`/student-job-details/${job.id}`}>View Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No jobs assigned yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentJobTracking;
