const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
const Student = require("./Student.js");

const Payment = sequelize.define(
  "Payment",
  {
    paymentMethod: {
      type: DataTypes.ENUM("card", "cash"),
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.ENUM("pending", "success", "failed"),
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stu_id: {
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
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Payment;
