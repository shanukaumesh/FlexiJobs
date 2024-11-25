const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
const Application = require("./Application.js");
const Payment = require("./Payment.js");

const Employer = sequelize.define(
  "Employer",
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

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    application_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Application,
        key: "id",
      },
    },

    payment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Payment,
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

module.exports = Employer;
