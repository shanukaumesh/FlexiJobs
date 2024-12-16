const Student = require("../models/Student.js");
const Employer = require("../models/Employer.js");
const bcrypt = require("bcryptjs");
const logger = require("../middlewares/logger.js");
const dotenv = require("dotenv");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

dotenv.config();

const JWT_SECRET = process.env.JWT;

// Register a new student
exports.registerStudent = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingStudent = await Student.findOne({
      where: { email: email },
    });

    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new student
    const newStudent = await Student.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      status: true,
    });

    // Generate a JWT Token
    const token = jwt.sign({ id: newStudent.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    logger.info(`Student registered successfully: ${newStudent.email}`);
    return res
      .cookie("accessToken", token, { httpOnly: true, secure: true })
      .status(201)
      .json({
        message: "Student registered successfully",
        student: newStudent,
        id: newStudent.id,
      });
  } catch (error) {
    logger.error("Error in registering a user: ", error);
    return res
      .status(500)
      .json({ message: "Unable to create a user", error: error.message });
  }
};

// Register a new employer
exports.registerEmployer = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingEmployer = await Employer.findOne({
      where: { email: email },
    });

    if (existingEmployer) {
      return res.status(400).json({ message: "Employer already exists" });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new employer
    const newEmployer = await Employer.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      status: true,
    });

    // Generate a JWT Token
    const token = jwt.sign({ id: newEmployer.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    logger.info(`Employer registered successfully: ${newEmployer.email}`);
    return res
      .cookie("accessToken", token, { httpOnly: true, secure: true })
      .status(201)
      .json({
        message: "Employer registered successfully",
        employer: newEmployer,
        id: newEmployer.id,
      });
  } catch (error) {
    logger.error("Error in registering a user: ", error);
    return res
      .status(500)
      .json({ message: "Unable to create a user", error: error.message });
  }
};

// Login a student
exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({
      where: { email: email },
    });

    if (!student) {
      return res.status(400).json({ message: "Student not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, student.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT Token
    const token = jwt.sign({ id: student.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    logger.info(`Student logged in successfully: ${student.email}`);
    return res
      .cookie("accessToken", token, { httpOnly: true, secure: true })
      .status(200)
      .json({ message: "Student logged in successfully", student });
  } catch (error) {
    logger.error("Error in logging in a user: ", error);
    return res
      .status(500)
      .json({ message: "Unable to login a user", error: error.message });
  }
};

// Login an employer
exports.loginEmployer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const employer = await Employer.findOne({
      where: { email: email },
    });

    if (!employer) {
      return res.status(400).json({ message: "Employer not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, employer.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT Token
    const token = jwt.sign({ id: employer.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    logger.info(`Employer logged in successfully: ${employer.email}`);
    return res
      .cookie("accessToken", token, { httpOnly: true, secure: true })
      .status(200)
      .json({ message: "Employer logged in successfully", employer });
  } catch (error) {
    logger.error("Error in logging in a user: ", error);
    return res
      .status(500)
      .json({ message: "Unable to login a user", error: error.message });
  }
};

// Logout a student
exports.logoutStudent = (req, res) => {
  res.clearCookie("accessToken");
  return res.status(200).json({ message: "Student logged out successfully" });
};

// Logout an employer
exports.logoutEmployer = (req, res) => {
  res.clearCookie("accessToken");
  return res.status(200).json({ message: "Employer logged out successfully" });
};
