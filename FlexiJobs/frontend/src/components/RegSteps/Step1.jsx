import React from 'react';
import '../../styles/RegistrationSteps/Step1.css';
import RegisterPageImage from '../../assets/loginpageImage.png'

const Step1 = ({ nextStep, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <img src={RegisterPageImage} alt="Illustration" />
        </div>
        <div className="register-right">
          <h2>Sign Up</h2>
          <p>Start your journey with us</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-pw">
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword || ''}
                onChange={handleChange}
                required
              />  
            </div>
            </div>
            <button className="register-btn" onClick={nextStep}>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
