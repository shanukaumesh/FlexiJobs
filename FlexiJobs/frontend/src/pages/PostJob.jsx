import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/PostJob.css";
import Header_LoggedUser from "../components/Header_LoggedUser";

const PostJob = () => {
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

    // Retrieve and parse the user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData || !userData.email) {
      console.error(
        "User data in localStorage is invalid or missing:",
        userData
      );
      alert("User email not found. Please log in again.");
      return;
    }

    const userEmail = userData.email;
    console.log("User email retrieved successfully:", userEmail);

    // Creating the payload in the expected structure
    const payload = {
      jobTitle: formData.jobTitle,
      companyName: formData.companyName,
      description: formData.jobDescription,
      location: formData.jobLocation,
      salary: formData.salary,
      employmentType: formData.employmentType,
      skills: formData.requiredSkills,
      experienceLevel: formData.experienceLevel,
      deadline: new Date(formData.applicationDeadline).toISOString(),
      contactEmail: formData.contact,
      category: formData.jobCategory,
      logo: "dummy-logo.png", // Hardcoded for now
      postedBy: userEmail,
      status: true,
    };

    console.log("Payload constructed:", payload);

    try {
      const response = await axios.post(
        "http://localhost:8001/job-ms/jobs",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Job posted successfully:", response.data);
      alert("Job posted successfully!");
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
                <option value="Full_Time">Full-Time</option>
                <option value="Part_Time">Part-Time</option>
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
                <option value="Entry_Level">Entry-Level</option>
                <option value="Mid_Level">Mid-Level</option>
                <option value="Senior_Level">Senior-Level</option>
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
              <input type="file" onChange={handleFileChange} accept="image/*" />
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
