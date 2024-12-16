const Student = require("./Student.js");
const Employer = require("./Employer.js");
const Job = require("./Job.js");
const Payment = require("./Payment.js");
const Application = require("./Application.js");

// Define associations
Employer.hasMany(Job, { foreignKey: "employerId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Job.belongsTo(Employer, { foreignKey: "employerId" });

Student.hasMany(Application, { foreignKey: "studentId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Application.belongsTo(Student, { foreignKey: "studentId" });

Job.hasMany(Application, { foreignKey: "jobId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Application.belongsTo(Job, { foreignKey: "jobId" });

Student.hasMany(Payment, { foreignKey: "studentId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Payment.belongsTo(Student, { foreignKey: "studentId" });

Job.hasMany(Payment, { foreignKey: "jobId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Payment.belongsTo(Job, { foreignKey: "jobId" });

// Export all models
module.exports = {
  Student,
  Employer,
  Job,
  Payment,
  Application,
};
