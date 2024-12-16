const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");

// Define the Student model
const Student = sequelize.define(
  "Student",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nic: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
    address: {
      type: DataTypes.STRING,
    },
    nicPhoto: {
      type: DataTypes.STRING,
    },
    university: {
      type: DataTypes.STRING,
    },
    universityID: {
      type: DataTypes.STRING,
    },
    universityEmail: {
      type: DataTypes.STRING,
    },
    universityIDPhoto: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" }
);

module.exports = Student;
