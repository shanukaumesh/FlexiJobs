const {
  createJob,
  updateJob,
  getAllJobs,
  getJob,
  getAllJobsByCategory,
  getAllJobsByEmployer,
  getAllJobsByExperienceLevel,
  getAllJobsByJobStatus,
  getAllJobsByJobType,
  getAllJobsByLocation,
  getAllJobsByStatus,
  deleteJob,
} = require("../controllers/job.js");
const express = require("express");

const router = express.Router();

// Create a new job
router.post("/", createJob);

// Update a job
router.put("/:id", updateJob);

// Get all jobs
router.get("/", getAllJobs);

// Get a job by ID
router.get("/:id", getJob);

// Get all jobs by category
router.get("/category/:category", getAllJobsByCategory);

// Get all jobs by employer ID
router.get("/employer/:employerId", getAllJobsByEmployer);

// Get all jobs by experience level
router.get("/experience/:experienceLevel", getAllJobsByExperienceLevel);

// Get all jobs by job status
router.get("/jobStatus/:jobStatus", getAllJobsByJobStatus);

// Get all jobs by job type
router.get("/jobType/:jobType", getAllJobsByJobType);

// Get all jobs by location
router.get("/location/:location", getAllJobsByLocation);

// Get all jobs by status
router.get("/status/:status", getAllJobsByStatus);

// Delete a job
router.delete("/:id", deleteJob);

module.exports = router;