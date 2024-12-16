const {
  updateEmployer,
  getAllEmployers,
  getEmployer,
  deleteEmployer,
} = require("../controllers/employer.js");
const express = require("express");

const router = express.Router();

// Update an employer
router.put("/:id", updateEmployer);

// Get all employers
router.get("/", getAllEmployers);

// Get an employer by ID
router.get("/:id", getEmployer);

// Delete an employer
router.delete("/:id", deleteEmployer);

module.exports = router;
