const {
  registerStudent,
  verifyStudentOtp,
  registerEmployer,
  verifyEmployerOtp,
  loginStudent,
  loginEmployer,
  logoutStudent,
  logoutEmployer,
} = require("../controllers/auth.js");
const express = require("express");

const router = express.Router();

// Register a new student
router.post("/register/student", registerStudent);

// Verify OTP and register a new student
router.post("/verify/student", verifyStudentOtp);

// Register a new employer
router.post("/register/employer", registerEmployer);

// Verify OTP and register a new employer
router.post("/verify/employer", verifyEmployerOtp);

// Login a student
router.post("/login/student", loginStudent);

// Login an employer
router.post("/login/employer", loginEmployer);

// Logout a student
router.post("/logout/student", logoutStudent);

// Logout an employer
router.post("/logout/employer", logoutEmployer);

module.exports = router;
