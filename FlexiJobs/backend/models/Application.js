const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
const Student = require("./Student.js");

const Application = sequelize.define(
  "Application",
  {
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cv: {
      type: DataTypes.STRING,
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

module.exports = Application;
