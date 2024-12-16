const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
const Student = require("./Student.js");
const Job = require("./Job.js");

// Define the Application model
const Application = sequelize.define(
  "Application",
  {
    jobId: {
      type: DataTypes.INTEGER,
      references: {
        model: Job,
        key: "id",
      },
    },
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: "id",
      },
    },
    jobTitle: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    resume: {
      type: DataTypes.STRING,
    },
    applicationStatus: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      defaultValue: "Pending",
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" }
);

module.exports = Application;
