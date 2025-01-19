const Job = require("../models/Job.js");
const logger = require("../middlewares/logger.js");
const { use } = require("../routes/authRoutes.js");

// Create a new job
exports.createJob = async (req, res) => {
  const {
    employerId,
    title,
    companyName,
    description,
    location,
    salary,
    jobType,
    skills,
    experienceLevel,
    deadline,
    contactEmail,
    category,
    logo,
    jobStatus,
    status,
    userID, // New field added (Optional, may be NULL initially)
  } = req.body;

  try {
    // Create a new job
    const newJob = await Job.create({
      employerId,
      title,
      companyName,
      description,
      location,
      salary,
      jobType,
      skills,
      experienceLevel,
      deadline,
      contactEmail,
      category,
      logo,
      jobStatus,
      status,
      userID, // Insert userID if available, or NULL if not assigned
    });

    logger.info(`Job created successfully: ${newJob.title}`);
    return res.status(201).json({
      message: "Job created successfully",
      job: newJob,
    });
  } catch (error) {
    logger.error("Error in creating a job: ", error);
    return res
      .status(500)
      .json({ message: "Unable to create a job", error: error.message });
  }
};

// Update a job
exports.updateJob = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    companyName,
    description,
    location,
    salary,
    jobType,
    skills,
    experienceLevel,
    deadline,
    contactEmail,
    category,
    logo,
    jobStatus,
    status,
  } = req.body;

  try {
    // Find the job by ID
    const job = await Job.findByPk(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Update the fields if they are provided
    if (title) {
      job.title = title;
    }

    if (companyName) {
      job.companyName = companyName;
    }

    if (description) {
      job.description = description;
    }

    if (location) {
      job.location = location;
    }

    if (salary) {
      job.salary = salary;
    }

    if (jobType) {
      job.jobType = jobType;
    }

    if (skills) {
      job.skills = skills;
    }

    if (experienceLevel) {
      job.experienceLevel = experienceLevel;
    }

    if (deadline) {
      job.deadline = deadline;
    }

    if (contactEmail) {
      job.contactEmail = contactEmail;
    }

    if (category) {
      job.category = category;
    }

    if (logo) {
      job.logo = logo;
    }

    if (jobStatus) {
      job.jobStatus = jobStatus;
    }

 


    if (status) {
      job.status = status;
    }

    // Save the updated job
    await job.save();

    logger.info(`Job updated successfully: ${job.title}`);
    return res.status(200).json({
      message: "Job updated successfully",
      job,
    });
  } catch (error) {
    logger.error("Error in updating a job: ", error);
    return res
      .status(500)
      .json({ message: "Unable to update a job", error: error.message });
  }
};

// Get a job by ID
exports.getJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findByPk(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json({ job });
  } catch (error) {
    logger.error("Error in getting a job: ", error);
    return res
      .status(500)
      .json({ message: "Unable to get a job", error: error.message });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs: ", error);
    return res
      .status(500)
      .json({ message: "Unable to get all jobs", error: error.message });
  }
};

// Get all jobs by employer ID
exports.getAllJobsByEmployer = async (req, res) => {
  const { employerId } = req.params;

  try {
    const jobs = await Job.findAll({
      where: {
        employerId: employerId,
        status: true, // Add the condition for status: true
      },
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs by employer: ", error);
    return res.status(500).json({
      message: "Unable to get all jobs by employer",
      error: error.message,
    });
  }
}; 

// Get all jobs by category
exports.getAllJobsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const jobs = await Job.findAll({
      where: { category: category },
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs by category: ", error);
    return res.status(500).json({
      message: "Unable to get all jobs by category",
      error: error.message,
    });
  }
};

// Get all jobs by location
exports.getAllJobsByLocation = async (req, res) => {
  const { location } = req.params;

  try {
    const jobs = await Job.findAll({
      where: { location: location },
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs by location: ", error);
    return res.status(500).json({
      message: "Unable to get all jobs by location",
      error: error.message,
    });
  }
};

// Get all jobs by job type
exports.getAllJobsByJobType = async (req, res) => {
  const { jobType } = req.params;

  try {
    const jobs = await Job.findAll({
      where: { jobType: jobType },
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs by job type: ", error);
    return res.status(500).json({
      message: "Unable to get all jobs by job type",
      error: error.message,
    });
  }
};

// Get all jobs by experience level
exports.getAllJobsByExperienceLevel = async (req, res) => {
  const { experienceLevel } = req.params;

  try {
    const jobs = await Job.findAll({
      where: { experienceLevel: experienceLevel },
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs by experience level: ", error);
    return res.status(500).json({
      message: "Unable to get all jobs by experience level",
      error: error.message,
    });
  }
};

// Get all jobs by job status
exports.getAllJobsByJobStatus = async (req, res) => {
  const { jobStatus } = req.params;

  try {
    const jobs = await Job.findAll({
      where: { jobStatus: jobStatus },
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs by job status: ", error);
    return res.status(500).json({
      message: "Unable to get all jobs by job status",
      error: error.message,
    });
  }
};

// Get all jobs by status
exports.getAllJobsByStatus = async (req, res) => {
  const { status } = req.params;

  try {
    const jobs = await Job.findAll({
      where: { status: status },
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    logger.error("Error in getting all jobs by status: ", error);
    return res.status(500).json({
      message: "Unable to get all jobs by status",
      error: error.message,
    });
  }
};

// Delete a job (soft delete)
exports.deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findByPk(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Soft delete the job
    job.status = false;
    await job.save();

    return res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    logger.error("Error in deleting a job: ", error);
    return res
      .status(500)
      .json({ message: "Unable to delete a job", error: error.message });
  }
};
