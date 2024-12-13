import React from 'react';
import RegisterPageImage from '../../assets/loginpageImage.png';
import axios from 'axios';

const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();

    try {
      const { userId, idNumber, dateOfBirth, address } = formData;

      // Update student record using userId
      const response = await axios.put(
        `http://localhost:8000/user-ms/users/${userId}/students`,
        { idNumber, dateOfBirth, address },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Student record updated successfully:', response.data);
      nextStep(); // Proceed to the next step
    } catch (err) {
      console.error('Error updating student record:', err);
      alert('Failed to update student record. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <img src={RegisterPageImage} alt="Illustration" />
        </div>
        <div className="register-right">
          <h2>Sign Up</h2>
          <p>Provide your identification details</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="idNumber"
                placeholder="ID/Passport No."
                value={formData.idNumber || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button className="register-btn" onClick={prevStep}>
                Back
              </button>
              <button className="register-btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step3;
