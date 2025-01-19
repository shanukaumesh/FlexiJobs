const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./connect.js");
const cookieParser = require("cookie-parser");
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
const PORT = process.env.PORT || 8081; // Main server runs on a different port

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Middleware to parse cookies
app.use(cookieParser());

app.use(bodyParser.json());

// Set up the routes
app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/employers", employerRoutes);
app.use("/applications", applicationRoutes);
app.use("/jobs", jobRoutes);
app.use("/payments", paymentRoutes);

// Proxy OTP routes to the OTP server
const axios = require("axios");
app.post("/send-otp", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:8080/send-otp", req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to send OTP", error: error.message });

  }
});

app.post("/verify-otp", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:8080/verify-otp", req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
});

app.listen(PORT, IP, () => {
  console.log(`Main server is running on http://${IP}:${PORT}`);
});
