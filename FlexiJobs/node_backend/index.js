const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./connect.js");
const cookieParser = require("cookie-parser");
require("./models/associations.js");
const logger = require("./middlewares/logger.js");
const authRoutes = require("./routes/authRoutes.js");
const studentRoutes = require("./routes/studentRoutes.js");
const employerRoutes = require("./routes/employerRoutes.js");
const applicationRoutes = require("./routes/applicationRoutes.js");
const jobRoutes = require("./routes/jobRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");

// Load environment variables
dotenv.config();

// Initialize the Database
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Database connection has been established successfully.");

    await sequelize.sync({ force: false });
    logger.info("All models were synchronized successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
};

initializeDatabase();

const app = express();
const IP = process.env.IP || "localhost";
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Middleware to parse cookies
app.use(cookieParser());

// setup the routes
app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/employers", employerRoutes);
app.use("/applications", applicationRoutes);
app.use("/jobs", jobRoutes);
app.use("/payments", paymentRoutes);

app.listen(PORT, IP, () => {
  console.log(`Server is running on port ${PORT}`);
});
