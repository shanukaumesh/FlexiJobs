import React, { useState, useEffect } from "react";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Sidebar from "../components/EmployerUIs/Sidebar";
import "../styles/PaymentDashboardPage.css";

const PaymentDashboardPage = () => {
  const [userRole, setUserRole] = useState("student"); // Replace with actual user role
  const [filterStatus, setFilterStatus] = useState("All");
  const [payments, setPayments] = useState([]); // State to hold payments data

  // Fetch payments from the backend
  useEffect(() => {
    const fetchPayments = async () => {
      console.log("Fetching payments data...");
      try {
        const response = await fetch("http://localhost:8080/payments/");
        if (!response.ok) {
          throw new Error(`Failed to fetch payments: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched payments data:", data);

        // Transform data to match the frontend structure
        const transformedPayments = data.payments.map((payment) => ({
          jobId: `J${payment.jobId}`,
          studentName: `Student ${payment.studentId}`, // Placeholder for student name
          amount: payment.amount,
          completionDate: new Date(payment.paidDate).toISOString().split("T")[0], // Format date
          assignedDate: new Date(payment.created_at).toISOString().split("T")[0],
          timeDuration: "N/A", // Placeholder value for timeDuration
          paymentStatus: payment.paymentStatus,
        }));

        setPayments(transformedPayments);
      } catch (error) {
        console.error("Error fetching payments:", error.message);
      }
    };

    fetchPayments();
  }, []);

  // Handle Filter Change
  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  // Filter payments based on status
  const filterPayments = (payments) => {
    if (filterStatus === "All") return payments;
    return payments.filter((payment) => payment.paymentStatus.toLowerCase() === filterStatus.toLowerCase());
  };

  // Generate Summary Data
  const getSummary = (filteredPayments) => {
    const totalAmount = filteredPayments.reduce(
      (total, payment) => total + (payment.paymentStatus === "Paid" ? payment.amount : 0),
      0
    );
    const paidCount = filteredPayments.filter((payment) => payment.paymentStatus === "Paid").length;
    const pendingCount = filteredPayments.filter((payment) => payment.paymentStatus === "Pending").length;

    return { totalAmount, paidCount, pendingCount };
  };

  const filteredPayments = filterPayments(payments);
  const summary = getSummary(filteredPayments);

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

          {/* Summary Section */}
          <div className="summary-section">
            <h2>{userRole === "student" ? "Student Payment Summary" : "Employer Payment Summary"}</h2>
            <p>
              <strong>Total Amount:</strong> ${summary.totalAmount}
            </p>
            <p>
              <strong>Paid Jobs:</strong> {summary.paidCount}
            </p>
            <p>
              <strong>Pending Jobs:</strong> {summary.pendingCount}
            </p>
          </div>

          {/* Payments Section */}
          <div className="payments-section">
            <h2>{userRole === "student" ? "Student Payments" : "Employer Payments"}</h2>
            <div className="card-container">
              {filteredPayments.map((payment, index) => (
                <div className="payment-card" key={index}>
                  <h3>Job ID: {payment.jobId}</h3>
                  <p>
                    <strong>Student Name:</strong> {payment.studentName}
                  </p>
                  <p>
                    <strong>Amount:</strong> ${payment.amount}
                  </p>
                  {userRole === "student" ? (
                    <p>
                      <strong>Completion Date:</strong> {payment.completionDate}
                    </p>
                  ) : (
                    <p>
                      <strong>Assigned Date:</strong> {payment.assignedDate}
                    </p>
                  )}
                  <p>
                    <strong>Time Duration:</strong> {payment.timeDuration}
                  </p>
                  <p className={`status ${payment.paymentStatus.toLowerCase()}`}>
                    <strong>Status:</strong> {payment.paymentStatus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboardPage;
  