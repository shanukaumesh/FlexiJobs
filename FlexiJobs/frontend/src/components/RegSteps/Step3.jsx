import React from 'react';
import RegisterPageImage from '../../assets/loginpageImage.png'

const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
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
            <div className="form-group">
              <input
                type="file"
                name="uploadId"
                onChange={(e) =>
                  setFormData({ ...formData, uploadId: e.target.files[0] })
                }
                required
              />
            </div>
            <div className="button-group">
              <button className="register-btn" onClick={prevStep}>
                Back
              </button>
              <button className="register-btn" onClick={nextStep}>
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
