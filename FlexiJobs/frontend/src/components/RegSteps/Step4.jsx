import React from 'react';
import RegisterPageImage from '../../assets/loginpageImage.png'

const Step4 = ({ nextStep, prevStep, formData, setFormData }) => {
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
          <p>Provide your academic details</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="university"
                placeholder="University Name"
                value={formData.university || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="UniversityID"
                placeholder="University ID"
                value={formData.uniID || ''}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="UniversityEmail"
                placeholder="University Email"
                value={formData.uniEmail || ''}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                name="proofOfUniID"
                onChange={(e) =>
                  setFormData({ ...formData, proofOfEnrollment: e.target.files[0] })
                }
                required
              />
            </div>
            <div className="button-group">
              <button className="register-btn" onClick={prevStep}>
                Back
              </button>
              <button className="register-btn" onClick={nextStep}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step4;
