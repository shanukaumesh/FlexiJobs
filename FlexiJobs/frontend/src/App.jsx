import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css'; // CSS file for styling
import Home from './pages/Home'; // Updated import path for the Home component
import AboutPage from './pages/AboutUs';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        
    </div>
  );
}

export default App;
