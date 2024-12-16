const {
  createPayment,
  updatePayment,
  getAllPayments,
  getPayment,
  deletePayment,
} = require("../controllers/payment.js");
const express = require("express");

const router = express.Router();

// Create a new payment
router.post("/", createPayment);

// Update a payment
router.put("/:id", updatePayment);

// Get all payments
router.get("/", getAllPayments);

// Get a payment by ID
router.get("/:id", getPayment);

// Delete a payment
router.delete("/:id", deletePayment);

module.exports = router;
