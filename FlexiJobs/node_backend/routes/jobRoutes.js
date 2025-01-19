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

// Get jobs with filters (status, location, jobType, employerId)
router.get("/filtered", async (req, res) => {
  try {
    const { status, location, jobType, employerId } = req.query; // Access filters from query parameters

    // Build the query based on available filters
    let query = {};

    if (status) {
      query.jobStatus = status; // Filter by job status (true/false)
    }

    if (location) {
      query.location = location; // Filter by location
    }

    if (jobType) {
      query.jobType = jobType; // Filter by job type
    }

    if (employerId) {
      query.employerId = employerId; // Filter by employer ID
    }

    // Fetch jobs with the constructed query
    const jobs = await Job.findAll({
      where: query, // Apply filters to the query
    });

    // Send back the jobs in the response
    return res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({
      message: "Failed to fetch jobs. Please try again later.",
      error: error.message,
    });
  }
});

module.exports = router;