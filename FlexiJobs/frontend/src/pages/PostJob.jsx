import React, { useState } from "react";
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
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, companyLogo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
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
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
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
                                <option value="Entry-Level">Entry-Level</option>
                                <option value="Mid-Level">Mid-Level</option>
                                <option value="Senior-Level">Senior-Level</option>
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
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="submit-btn">Post Job</button>
                            <button type="button" className="cancel-btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostJob;
