const {
  registerStudent,
  registerEmployer,
  loginStudent,
  loginEmployer,
  logoutStudent,
  logoutEmployer,
} = require("../controllers/auth.js");
const express = require("express");

const router = express.Router();

// Register a new student
router.post("/register/student", registerStudent);

// Register a new employer
router.post("/register/employer", registerEmployer);

// Login a student
router.post("/login/student", loginStudent);

// Login an employer
router.post("/login/employer", loginEmployer);

// Logout a student
router.post("/logout/student", logoutStudent);

// Logout an employer
router.post("/logout/employer", logoutEmployer);

module.exports = router;
