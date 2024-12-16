const Application = require("../models/Application.js");
const logger = require("../middlewares/logger.js");

// Create a new application
exports.createApplication = async (req, res) => {
  const {
    jobId,
    studentId,
    jobTitle,
    location,
    fullName,
    email,
    resume,
    applicationStatus,
    status,
  } = req.body;

  try {
    // Create a new application
    const newApplication = await Application.create({
      jobId,
      studentId,
      jobTitle,
      location,
      fullName,
      email,
      resume,
      applicationStatus,
    });

    logger.info(`Application created successfully: ${newApplication.id}`);
    return res.status(201).json({
      message: "Application created successfully",
      application: newApplication,
    });
  } catch (error) {
    logger.error("Error in creating an application: ", error);
    return res.status(500).json({
      message: "Unable to create an application",
      error: error.message,
    });
  }
};

// Update an application
exports.updateApplication = async (req, res) => {
  const { id } = req.params;
  const {
    jobId,
    studentId,
    jobTitle,
    location,
    fullName,
    email,
    resume,
    applicationStatus,
    status,
  } = req.body;

  try {
    // Find the application by ID
    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // Update the fields if they are provided
    if (jobId) {
      application.jobId = jobId;
    }

    if (studentId) {
      application.studentId = studentId;
    }

    if (jobTitle) {
      application.jobTitle = jobTitle;
    }

    if (location) {
      application.location = location;
    }

    if (fullName) {
      application.fullName = fullName;
    }

    if (email) {
      application.email = email;
    }

    if (resume) {
      application.resume = resume;
    }

    if (applicationStatus) {
      application.applicationStatus = applicationStatus;
    }

    // Save the updated application
    await application.save();

    logger.info(`Application updated successfully: ${application.id}`);
    return res.status(200).json({
      message: "Application updated successfully",
      application,
    });
  } catch (error) {
    logger.error("Error in updating an application: ", error);
    return res.status(500).json({
      message: "Unable to update an application",
      error: error.message,
    });
  }
};

// Get an application by ID
exports.getApplication = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    return res.status(200).json({ application });
  } catch (error) {
    logger.error("Error in getting an application: ", error);
    return res.status(500).json({
      message: "Unable to get an application",
      error: error.message,
    });
  }
};

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();

    return res.status(200).json({ applications });
  } catch (error) {
    logger.error("Error in getting all applications: ", error);
    return res.status(500).json({
      message: "Unable to get all applications",
      error: error.message,
    });
  }
};

// Delete an application (soft delete)
exports.deleteApplication = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // Soft delete the application
    application.status = false;
    await application.save();

    logger.info(`Application deleted successfully: ${application.id}`);
    return res.status(200).json({
      message: "Application deleted successfully",
      application,
    });
  } catch (error) {
    logger.error("Error in deleting an application: ", error);
    return res.status(500).json({
      message: "Unable to delete an application",
      error: error.message,
    });
  }
};
