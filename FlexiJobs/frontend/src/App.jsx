import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css'; // CSS file for styling
import Home from './pages/Home'; // Updated import path for the Home component
import AboutPage from './pages/AboutUs';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import StudentDashboard from './pages/StudentDashboard';
import NotFound from './pages/NotFound';
import StudentRegister from './pages/StudentRegister';
import EmployerRegister from './pages/EmployerRegister';
import EmployerDashboard from './pages/EmployerDashboard';
import AvailableJobs from './pages/AvailableJobs';
import PostJob from './pages/PostJob';
import JobDetails from './pages/JobDetails';
import ApplyJob from './pages/ApplyJob';
import ApplicationPage from './pages/Applications';
import EmployerProfile from './pages/EmployerProfile';
import StudentProfile from './pages/StudentProfilePage';
import SettingsPage from './pages/SettingsPage';
import ApplicationReview from './pages/ApplicationReview';
import JobTrackingPage from './pages/JobTrackingPage';

const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Student" element={<StudentDashboard />} />
          <Route path="/Employer" element={<EmployerDashboard />} />
          <Route path="/student-register" element={<StudentRegister/>} />
          <Route path="/employer-register" element={<EmployerRegister/>} />
          <Route path="/available-Jobs" element={<AvailableJobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/apply" element={<ApplyJob />} /> 
          <Route path="/profile-employer" element={<EmployerProfile />} />
          <Route path="/profile-student" element={<StudentProfile />} />
          <Route path="/settings" element={<SettingsPage/>} />
          <Route path="/applications" element={<ApplicationPage />} />
          <Route path="/application-review/:id" element={<ApplicationReview />} />
          <Route path="/job-tracking" element={<JobTrackingPage />} />
         
     
          <Route path="*" element={<NotFound />} />
        </Routes>
        
    </div>
  );
}

export default App;
