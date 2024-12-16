const Employer = require("../models/Employer.js");
const bcrypt = require("bcryptjs");
const logger = require("../middlewares/logger.js");

// Update an employer
exports.updateEmployer = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, contact, address, status } = req.body;

  try {
    // Find the employer by ID
    const employer = await Employer.findByPk(id);

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Update the fields if they are provided
    if (name) {
      employer.name = name;
    }

    if (email) {
      employer.email = email;
    }

    if (password) {
      employer.password = hashedPassword;
    }

    if (contact) {
      employer.contact = contact;
    }

    if (address) {
      employer.address = address;
    }

    if (status) {
      employer.status = status;
    }

    // Save the updated employer
    await employer.save();

    logger.info(`Employer updated successfully: ${employer.email}`);
    return res.status(200).json({
      message: "Employer updated successfully",
      employer,
    });
  } catch (error) {
    logger.error("Error in updating an employer: ", error);
    return res
      .status(500)
      .json({ message: "Unable to update an employer", error: error.message });
  }
};

// Get an employer by ID
exports.getEmployer = async (req, res) => {
  const { id } = req.params;

  try {
    const employer = await Employer.findByPk(id);

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    return res.status(200).json({ employer });
  } catch (error) {
    logger.error("Error in getting an employer: ", error);
    return res
      .status(500)
      .json({ message: "Unable to get an employer", error: error.message });
  }
};

// Get all employers
exports.getAllEmployers = async (req, res) => {
  try {
    const employers = await Employer.findAll();

    return res.status(200).json({ employers });
  } catch (error) {
    logger.error("Error in getting all employers: ", error);
    return res
      .status(500)
      .json({ message: "Unable to get all employers", error: error.message });
  }
};

// Delete an employer (soft delete)
exports.deleteEmployer = async (req, res) => {
  const { id } = req.params;

  try {
    const employer = await Employer.findByPk(id);

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    // Soft delete the employer
    employer.status = false;
    await employer.save();

    return res.status(200).json({ message: "Employer deleted successfully" });
  } catch (error) {
    logger.error("Error in deleting an employer: ", error);
    return res
      .status(500)
      .json({ message: "Unable to delete an employer", error: error.message });
  }
};
