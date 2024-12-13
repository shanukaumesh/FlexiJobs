import React from 'react';
import RegisterPageImage from '../../assets/loginpageImage.png';

const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, nicPhoto: file }); // Store the NIC photo file in formData
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Navigating to Step 4");
    nextStep(); // Move to Step 4 without making an API call
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
                name="nic"
                placeholder="ID/Passport No."
                value={formData.nic || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="dob"
                value={formData.dob || ''}
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

            <hr className="solid" />
            <h5>Upload NIC Photo</h5>

            <div className="form-group">
              <input
                type="file"
                name="nicPhoto"
                accept="image/*"
                onChange={handleFileChange} // Store NIC photo in formData
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
