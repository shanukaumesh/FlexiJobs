import React, { useState, useEffect } from "react";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/PaymentDashboardPage.css";

// Mock Data for Payments (You can replace this with API calls)
const mockStudentPayments = [
  { jobId: "J101", studentName: "John Doe", amount: 500, completionDate: "2024-12-01", timeDuration: "1 Month", paymentStatus: "Paid" },
  { jobId: "J102", studentName: "Alice Smith", amount: 400, completionDate: "2024-12-05", timeDuration: "2 Weeks", paymentStatus: "Pending" },
  { jobId: "J103", studentName: "Bob Johnson", amount: 300, completionDate: "2024-12-10", timeDuration: "3 Weeks", paymentStatus: "Paid" },
];

const mockEmployerPayments = [
  { jobId: "J101", studentName: "John Doe", amount: 500, assignedDate: "2024-12-01", timeDuration: "1 Month", paymentStatus: "Paid" },
  { jobId: "J103", studentName: "Bob Johnson", amount: 300, assignedDate: "2024-12-10", timeDuration: "3 Weeks", paymentStatus: "Paid" },
  { jobId: "J101", studentName: "John Doe", amount: 500, assignedDate: "2024-12-01", timeDuration: "1 Month", paymentStatus: "Paid" },
  { jobId: "J103", studentName: "Bob Johnson", amount: 300, assignedDate: "2024-12-10", timeDuration: "3 Weeks", paymentStatus: "Paid" },
];

const PaymentDashboardPage = () => {
  const [userRole, setUserRole] = useState("student"); // Replace with actual user role
  const [studentPayments, setStudentPayments] = useState(mockStudentPayments);
  const [employerPayments, setEmployerPayments] = useState(mockEmployerPayments);
  const [filterStatus, setFilterStatus] = useState("All"); // Used for filtering payments based on status

  // Handle Filter Change
  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  // Filter payments based on status
  const filterPayments = (payments) => {
    if (filterStatus === "All") return payments;
    return payments.filter(payment => payment.paymentStatus.toLowerCase() === filterStatus.toLowerCase());
  };

  return (
    <div className="payment-dashboard-page">
      <Header_LoggedUser />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <h1>Payment Dashboard</h1>

          {/* Filter Section */}
          <div className="filter-section">
            <label htmlFor="statusFilter">Filter by Status: </label>
            <select id="statusFilter" value={filterStatus} onChange={(e) => handleStatusFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          {/* Conditional Rendering Based on User Role */}
          {userRole === "student" && (
            <div className="payments-section">
              {/* Summary Section */}
              <div className="summary-section">
                <h2>Summary</h2>
                <p><strong>Total Earnings:</strong> ${filterPayments(studentPayments).reduce((total, payment) => total + (payment.paymentStatus === "Paid" ? payment.amount : 0), 0)}</p>
                <p><strong>Paid Jobs:</strong> {filterPayments(studentPayments).filter(payment => payment.paymentStatus === "Paid").length}</p>
                <p><strong>Pending Jobs:</strong> {filterPayments(studentPayments).filter(payment => payment.paymentStatus === "Pending").length}</p>
              </div>

              {/* Payment Cards */}
              <div className="card-container">
                {filterPayments(studentPayments).map((payment, index) => (
                  <div className="payment-card" key={index}>
                    <h3>Job ID: {payment.jobId}</h3>
                    <p><strong>Student Name:</strong> {payment.studentName}</p>
                    <p><strong>Amount Earned:</strong> ${payment.amount}</p>
                    <p><strong>Completion Date:</strong> {payment.completionDate}</p>
                    <p><strong>Time Duration:</strong> {payment.timeDuration}</p>
                    <p className={`status ${payment.paymentStatus.toLowerCase()}`}>
                      <strong>Status:</strong> {payment.paymentStatus}
                    </p>
                    {/* New Button for Requesting Payment Update */}
                    
                  </div>
                ))}
              </div>
            </div>
          )}

          {userRole === "employer" && (
            <div className="payments-section">
              <div className="card-container">
                {filterPayments(employerPayments).map((payment, index) => (
                  <div className="payment-card" key={index}>
                    <h3>Job ID: {payment.jobId}</h3>
                    <p><strong>Student Name:</strong> {payment.studentName}</p>
                    <p><strong>Amount Paid:</strong> ${payment.amount}</p>
                    <p><strong>Assigned Date:</strong> {payment.assignedDate}</p>
                    <p><strong>Time Duration:</strong> {payment.timeDuration}</p>
                    <p className={`status ${payment.paymentStatus.toLowerCase()}`}>
                      <strong>Status:</strong> {payment.paymentStatus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboardPage;
