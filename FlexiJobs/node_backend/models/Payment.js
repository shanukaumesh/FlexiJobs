const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
const Student = require("./Student.js");
const Job = require("./Job.js");

// Define the Payment model
const Payment = sequelize.define(
  "Payment",
  {
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: "id",
      },
    },
    jobId: {
      type: DataTypes.INTEGER,
      references: {
        model: Job,
        key: "id",
      },
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    paymentStatus: {
      type: DataTypes.ENUM("Pending", "Paid"),
      defaultValue: "Pending",
    },
    paidDate: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" }
);

module.exports = Payment;