const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");

const Otp = sequelize.define("Otp", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expires: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Otp;
