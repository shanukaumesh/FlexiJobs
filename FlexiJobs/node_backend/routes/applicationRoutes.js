const {
  createApplication,
  updateApplication,
  getAllApplications,
  getApplication,
  deleteApplication,
} = require("../controllers/application.js");
const express = require("express");

const router = express.Router();

// Create a new application
router.post("/", createApplication);

// Update an application
router.put("/:id", updateApplication);

// Get all applications
router.get("/", getAllApplications);

// Get an application by ID
router.get("/:id", getApplication);

// Delete an application
router.delete("/:id", deleteApplication);

module.exports = router;
