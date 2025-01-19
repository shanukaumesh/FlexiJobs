import React from 'react';
import RegisterPageImage from '../../assets/loginpageImage.png';
import axios from 'axios';

const Step4 = ({ nextStep, prevStep, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, proofOfEnrollment: file }); // Store proof of university ID file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        userId,
        nic,
        dob,
        address,
        nicPhoto,
        university,
        uniIndex,
        uniEmail,
        uniIdPhoto,
      } = formData;

      const formDataObj = new FormData();
      formDataObj.append('userId', userId);
      formDataObj.append('nic', nic);
      formDataObj.append('dob', dob);
      formDataObj.append('address', address);
      formDataObj.append('nicPhoto', nicPhoto);
      formDataObj.append('university', university);
      formDataObj.append('uniIndex', uniIndex);
      formDataObj.append('uniEmail', uniEmail);
      formDataObj.append('uniIdPhoto', uniIdPhoto);

      // Send the complete update request
      const response = await axios.put(
        `http://localhost:8000/user-ms/users/${userId}/students`,
        formDataObj,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Student record updated successfully:', response.data);
      nextStep(); // Proceed to the final step
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
                name="uniID"
                placeholder="University Index No."
                value={formData.uniIndex || ''}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="uniEmail"
                placeholder="University Email"
                value={formData.uniEmail || ''}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                name="uniIdPhoto"
                onChange={handleFileChange} // Store proof of university ID in formData
                required
              />
            </div>
            <div className="button-group">
              <button className="register-btn" onClick={prevStep}>
                Back
              </button>
              <button className="register-btn" onClick={handleSubmit}>
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
