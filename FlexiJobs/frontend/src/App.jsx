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
import StudentLogin from './pages/StudentLogin';
import EmployerLogin from './pages/EmployerLogin';

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
          <Route path="/student-login" element={<StudentLogin/>} />
          <Route path="/employer-login" element={<EmployerLogin/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        
    </div>
  );
}

export default App;
