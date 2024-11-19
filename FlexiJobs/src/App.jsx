import React from 'react';
import './styles/index.css'; // CSS file for styling
import Home from './pages/Home'; // Updated import path for the Home component

const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
    </div>
  );
};  

export default App;
