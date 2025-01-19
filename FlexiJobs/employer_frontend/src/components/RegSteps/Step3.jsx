import React from "react";
import axios from "axios";
import RegisterPageImage from "../../assets/loginpageImage.png";

const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the user id from the local storage
    const userId = localStorage.getItem("userId");

    // Console log the retrieved user id
    console.log("User ID:", userId);

    // Data to send in the request
    const data = {
      nic: formData.nic,
      dob: formData.dob,
      address: formData.address,
      nicPhoto: "https://example.com/dummy-nic-photo.png", // Dummy photo
      university: formData.university,
      universityID: formData.uniIndex,
      universityEmail: formData.uniEmail,
      universityIDPhoto: "https://example.com/dummy-uni-id-photo.png", // Dummy photo
    };

    console.log("Form Data being sent:", {
      nic: formData.nic,
      dob: formData.dob,
      address: formData.address,
      nicPhoto: "https://example.com/dummy-nic-photo.png",
      university: formData.university,
      universityID: formData.uniIndex,
      universityEmail: formData.uniEmail,
      universityIDPhoto: "https://example.com/dummy-uni-id-photo.png",
    });

    try {
      // Make PUT request to update user data
      const response = await axios.put(
        `http://localhost:8080/students/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response);

      if (response.status === 200 || response.status === 201) {
        console.log("Student data updated successfully:", response.data);
        nextStep(); // Proceed to the next step
      } else {
        console.error("Failed to update student data:", response);
        alert("Failed to update student data. Please check the server logs.");
      }
    } catch (error) {
      console.error(
        "Error while updating student data:",
        error.response || error
      );

      // Handle specific error cases
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          alert(`Validation Error: ${data.message}`);
        } else if (status === 404) {
          alert("Endpoint not found. Check the API URL.");
        } else if (status === 500) {
          alert("Internal server error. Please try again later.");
        } else {
          alert(
            `Unexpected Error: ${status} - ${data.message || "Unknown error"}`
          );
        }
      } else {
        alert("Network error. Ensure the backend is running and reachable.");
      }
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nic"
                placeholder="ID/Passport No."
                value={formData.nic || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="dob"
                value={formData.dob || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address || ""}
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
                disabled // Disabled because we're using dummy data
              />
            </div>

            <h4>Provide your academic details</h4>
            <div className="form-group">
              <input
                type="text"
                name="university"
                placeholder="University Name"
                value={formData.university || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="uniIndex"
                placeholder="University Index No."
                value={formData.uniIndex || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="uniEmail"
                placeholder="University Email"
                value={formData.uniEmail || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                name="uniIdPhoto"
                disabled // Disabled because we're using dummy data
              />
            </div>

            <div className="button-group">
              <button type="button" className="register-btn" onClick={prevStep}>
                Back
              </button>
              <button type="submit" className="register-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step3;
