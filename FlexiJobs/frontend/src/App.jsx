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
import SingleJobPost from './pages/SingleJobPost';
import PostJob from './pages/PostJob';
import JobDetails from './pages/JobDetails';


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
         
     
          <Route path="*" element={<NotFound />} />
        </Routes>
        
    </div>
  );
}

export default App;
