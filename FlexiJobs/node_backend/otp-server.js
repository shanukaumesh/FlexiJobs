const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const app = express();
const PORT = 8080; // OTP server runs on a separate port

// Middleware
app.use(bodyParser.json());

// In-memory OTP store (for simplicity; use a database in production)
const otpStore = new Map();

// Configure nodemailer
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'micah.yundt25@ethereal.email',
        pass: 'Tynu9yuDBdCw9wtMAA'
    }
});


// Generate a random OTP
const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Endpoint to send OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Generate OTP
  const otp = generateOtp();
  otpStore.set(email, { otp, expires: Date.now() + 5 * 60 * 1000 }); // OTP valid for 5 minutes

  // Send email
  try {
    await transporter.sendMail({
      from: "sanathumesh1@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
    });

    console.log(`OTP sent to ${email}: ${otp}`);
    res.json({ message: "OTP sent successfully!" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

// Endpoint to verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  const record = otpStore.get(email);
  if (!record) {
    return res.status(400).json({ message: "Invalid email or OTP" });
  }

  const { otp: storedOtp, expires } = record;

  if (Date.now() > expires) {
    otpStore.delete(email);
    return res.status(400).json({ message: "OTP has expired" });
  }

  if (storedOtp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  // OTP is valid
  otpStore.delete(email);
  res.json({ message: "OTP verified successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`OTP server is running on http://localhost:${PORT}`);
});
