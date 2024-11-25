const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
const Employer = require("./Employer.js");

const Job = sequelize.define(
  "Job",
  {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    job_description: {
      type: DataTypes.STRING,
    },

    job_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    workexperience: {
      type: DataTypes.INTEGER,
    },
    edu: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    description_image: {
      type: DataTypes.STRING,
    },

    emp_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Employer,
        key: "id",
      },
    },

    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },

  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Job;
