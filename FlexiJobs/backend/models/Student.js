const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");

const Student = sequelize.define(
  "Student",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    nic_no: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dob: {
      type: DataTypes.DATE,
    },

    address: {
      type: DataTypes.STRING,
    },

    nic_image_url: {
      type: DataTypes.STRING,
    },

    university: {
      type: DataTypes.STRING,
    },

    uni_index: {
      type: DataTypes.STRING,
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

module.exports = Student;
