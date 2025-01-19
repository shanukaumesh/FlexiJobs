import React from 'react';
import '../../styles/RegistrationSteps/Step2.css';
import RegisterPageImage from '../../assets/loginpageImage.png'

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
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
          <h2>Confirmation</h2>
          <p>Enter the 5-digit code sent to your email</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="confirmationCode"
                placeholder="Confirmation Code"
                value={formData.confirmationCode || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button className="register-btn" onClick={prevStep}>
                Back
              </button>
              <button className="register-btn" onClick={nextStep}>
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
