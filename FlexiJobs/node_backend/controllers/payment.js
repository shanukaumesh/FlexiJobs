const Payment = require("../models/Payment.js");
const logger = require("../middlewares/logger.js");

// Create a new payment
exports.createPayment = async (req, res) => {
  const { studentId, jobId, amount, paymentStatus, paidDate, status } =
    req.body;

  try {
    // Create a new payment
    const newPayment = await Payment.create({
      studentId,
      jobId,
      amount,
      paymentStatus,
      paidDate,
      status,
    });

    logger.info(`Payment created successfully: ${newPayment.id}`);
    return res.status(201).json({
      message: "Payment created successfully",
      payment: newPayment,
    });
  } catch (error) {
    logger.error("Error in creating a payment: ", error);
    return res
      .status(500)
      .json({ message: "Unable to create a payment", error: error.message });
  }
};

// Update a payment
exports.updatePayment = async (req, res) => {
  const { id } = req.params;
  const { studentId, jobId, amount, paymentStatus, paidDate, status } =
    req.body;

  try {
    // Find the payment by ID
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    // Update the fields if they are provided
    if (studentId) {
      payment.studentId = studentId;
    }

    if (jobId) {
      payment.jobId = jobId;
    }

    if (amount) {
      payment.amount = amount;
    }

    if (paymentStatus) {
      payment.paymentStatus = paymentStatus;
    }

    if (paidDate) {
      payment.paidDate = paidDate;
    }

    if (status) {
      payment.status = status;
    }

    // Save the updated payment
    await payment.save();

    logger.info(`Payment updated successfully: ${payment.id}`);
    return res.status(200).json({
      message: "Payment updated successfully",
      payment,
    });
  } catch (error) {
    logger.error("Error in updating a payment: ", error);
    return res
      .status(500)
      .json({ message: "Unable to update a payment", error: error.message });
  }
};

// Get a payment by ID
exports.getPayment = async (req, res) => {
  const { id } = req.params;

  try {
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    return res.status(200).json({ payment });
  } catch (error) {
    logger.error("Error in getting a payment: ", error);
    return res
      .status(500)
      .json({ message: "Unable to get a payment", error: error.message });
  }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();

    return res.status(200).json({ payments });
  } catch (error) {
    logger.error("Error in getting all payments: ", error);
    return res
      .status(500)
      .json({ message: "Unable to get all payments", error: error.message });
  }
};

// Delete a payment (set status to 'false')
exports.deletePayment = async (req, res) => {
  const { id } = req.params;

  try {
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    payment.status = false;
    await payment.save();

    logger.info(`Payment deleted successfully: ${payment.id}`);
    return res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    logger.error("Error in deleting a payment: ", error);
    return res
      .status(500)
      .json({ message: "Unable to delete a payment", error: error.message });
  }
};
