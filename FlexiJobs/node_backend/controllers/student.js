const Student = require("../models/Student.js");
const bcrypt = require("bcryptjs");
const logger = require("../middlewares/logger.js");

// Update a student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    password,
    nic,
    dob,
    address,
    nicPhoto,
    university,
    universityID,
    universityEmail,
    universityIDPhoto,
    status,
  } = req.body;

  try {
    // Find the student by ID
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Update the fields if they are provided
    if (firstName) {
      student.firstName = firstName;
    }

    if (lastName) {
      student.lastName = lastName;
    }

    if (email) {
      student.email = email;
    }

    if (password) {
      // Hash the password
      const salt = bcrypt.genSaltSync(12);
      const hashedPassword = bcrypt.hashSync(password, salt);
      student.password = hashedPassword;
    }

    if (nic) {
      student.nic = nic;
    }

    if (dob) {
      student.dob = dob;
    }

    if (address) {
      student.address = address;
    }

    if (nicPhoto) {
      student.nicPhoto = nicPhoto;
    }

    if (university) {
      student.university = university;
    }

    if (universityID) {
      student.universityID = universityID;
    }

    if (universityEmail) {
      student.universityEmail = universityEmail;
    }

    if (universityIDPhoto) {
      student.universityIDPhoto = universityIDPhoto;
    }

    if (status) {
      student.status = status;
    }

    // Save  the updated student
    await student.save();

    logger.info(`Student updated successfully: ${student.email}`);
    return res
      .status(200)
      .json({ message: "Student updated successfully", student: student });
  } catch (error) {
    logger.error("Error in updating a student: ", error);
    return res
      .status(500)
      .json({ message: "Unable to update a student", error: error.message });
  }
};

// Get a student by ID
exports.getStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    logger.info(`Student retrieved successfully: ${student.email}`);
    return res
      .status(200)
      .json({ message: "Student retrieved successfully", student: student });
  } catch (error) {
    logger.error("Error in retrieving a student: ", error);
    return res
      .status(500)
      .json({ message: "Unable to retrieve a student", error: error.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    logger.info("Students retrieved successfully");
    return res
      .status(200)
      .json({ message: "Students retrieved successfully", students: students });
  } catch (error) {
    logger.error("Error in retrieving students: ", error);
    return res
      .status(500)
      .json({ message: "Unable to retrieve students", error: error.message });
  }
};

// Delete a student (soft delete)
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Soft delete the student
    student.status = false;
    await student.save();

    logger.info(`Student deleted successfully: ${student.email}`);
    return res
      .status(200)
      .json({ message: "Student deleted successfully", student: student });
  } catch (error) {
    logger.error("Error in deleting a student: ", error);
    return res
      .status(500)
      .json({ message: "Unable to delete a student", error: error.message });
  }
};
