import React from "react";
import "../styles/SettingsPage.css"; // Add CSS styles for the settings page if needed
import StudentSettings from "../components/StudentUIs/StudentSettings"; // Assuming this is the student settings component
import EmployerSettings from "../components/EmployerUIs/EmployerSettings";

const SettingsPage = () => {
  const userRole = "employer"; // Set this to either "student" or "employer" based on the user's role
  
  return (
    <div>
      {userRole === "student" && <StudentSettings />}
      {userRole === "employer" && <EmployerSettings />}
    </div>
  );
};

export default SettingsPage;
