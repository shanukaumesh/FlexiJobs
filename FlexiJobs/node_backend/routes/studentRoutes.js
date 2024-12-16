const {
  updateStudent,
  getAllStudents,
  getStudent,
  deleteStudent,
} = require("../controllers/student.js");
const express = require("express");

const router = express.Router();

// Update a student
router.put("/:id", updateStudent);

// Get all students
router.get("/", getAllStudents);

// Get a student by ID
router.get("/:id", getStudent);

// Delete a student
router.delete("/:id", deleteStudent);

module.exports = router;
