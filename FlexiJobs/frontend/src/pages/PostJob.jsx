import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/PostJob.css";
import Header_LoggedUser from "../components/Header_LoggedUser";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    jobLocation: "",
    salary: "",
    employmentType: "",
    requiredSkills: "",
    experienceLevel: "",
    applicationDeadline: "",
    contact: "",
    jobCategory: "",
    companyLogo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating field: ${name}, Value: ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`File selected: ${file.name}`);
    } else {
      console.error("File selection failed.");
    }
    setFormData({ ...formData, companyLogo: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submission started.");

    // Retrieve the user id from the local storage
    const userId = localStorage.getItem("userId");

    // Console log the retrieved user id
    console.log("User ID:", userId);

    // Create a FormData object for file upload
    const payload = new FormData();
    payload.append("employerId", userId);
    payload.append("title", formData.jobTitle);
    payload.append("companyName", formData.companyName);
    payload.append("description", formData.jobDescription);
    payload.append("location", formData.jobLocation);
    payload.append("salary", formData.salary);
    payload.append("jobType", formData.employmentType);
    payload.append("skills", formData.requiredSkills);
    payload.append("experienceLevel", formData.experienceLevel);
    payload.append("deadline", new Date(formData.applicationDeadline).toISOString());
    payload.append("contactEmail", formData.contact);
    payload.append("category", formData.jobCategory);
    payload.append("logo", formData.companyLogo);  // Append file
    payload.append("status", true);

    console.log("Payload constructed:", payload);

    try {
      const response = await axios.post("http://localhost:8080/jobs/", payload, {
        headers: {
          "Content-Type": "multipart/form-data",  // Make sure the request is handled as a multipart form
        },
      });

      console.log("Job posted successfully:", response.data);
      navigate("/employer");

    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
      alert("Failed to post job. Please try again.");
    }
  };

  return (
    <div>
      <Header_LoggedUser />
      <div className="dashboard">
        <Sidebar />
        <div className="post-job-content">
          <h2>Post a Job</h2>
          <p>Fill in the details below to create a job posting.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="e.g., Graphic Designer"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="e.g., Tech Innovators Ltd."
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Job Description</label>
              <textarea
                name="jobDescription"
                placeholder="Provide a detailed job description."
                value={formData.jobDescription}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Job Location</label>
              <input
                type="text"
                name="jobLocation"
                placeholder="e.g., Colombo, Sri Lanka"
                value={formData.jobLocation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Salary</label>
              <input
                type="text"
                name="salary"
                placeholder="e.g., LKR 30,000 - 50,000"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Employment Type</label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Full-time">Full-Time</option>
                <option value="Part-time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <div className="form-group">
              <label>Required Skills</label>
              <input
                type="text"
                name="requiredSkills"
                placeholder="e.g., JavaScript, React"
                value={formData.requiredSkills}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Experience Level</label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Entry-level">Entry-Level</option>
                <option value="Mid-level">Mid-Level</option>
                <option value="Senior-level">Senior-Level</option>
              </select>
            </div>
            <div className="form-group">
              <label>Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact Email/Phone</label>
              <input
                type="text"
                name="contact"
                placeholder="e.g., hr@company.com"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Job Category</label>
              <select
                name="jobCategory"
                value={formData.jobCategory}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Accounting">Accounting</option>
              </select>
            </div>
            <div className="form-group">
              <label>Upload Company Logo</label>
              <input type="file" name="companyLogo" onChange={handleFileChange} />
            </div>
            <div className="form-actions">
              
              <button type="submit" className="submit-btn">
                Post Job
              </button>
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
