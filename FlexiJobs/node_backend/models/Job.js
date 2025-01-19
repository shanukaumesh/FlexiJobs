const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
const Employer = require("./Employer.js");
const Student = require("./Student.js");

// Define the Job model
const Job = sequelize.define(
  "Job",
  {
    employerId: {
      type: DataTypes.INTEGER,
      references: {
        model: Employer,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.STRING,
    },
    jobType: {
      type: DataTypes.ENUM("Full-time", "Part-time", "Contract", "Internship"),
    },
    skills: {
      type: DataTypes.STRING,
    },
    experienceLevel: {
      type: DataTypes.ENUM("Entry-level", "Mid-level", "Senior-level"),
    },
    deadline: {
      type: DataTypes.DATE,
    },
    contactEmail: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.ENUM("IT", "Marketing", "Sales", "Accounting"),
    },
    logo: {
      type: DataTypes.STRING,
    },
    jobStatus: {
      type: DataTypes.ENUM("Ongoing", "Completed", "Not Started"),
      defaultValue: "Not Started",
    },

    userID: {
       type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: "id",
      },

    },

    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" }
);

module.exports = Job;
