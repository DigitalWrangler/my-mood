import React, { useState } from 'react';
import axios from 'axios';

const FighterForm = () => {
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      gender: '',
      age: '',
      weight: '',
      style: '',
      nationality: '',
      photo: null,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (event) => {
      setFormData({ ...formData, photo: event.target.files[0] });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      try {
        await axios.post('/submit-fighter', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        // Handle success or redirect
      } catch (error) {
        // Handle error
      }
    };
  
    return (
      <div>
        <h1>Fighter Details Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          /><br /><br />
  
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          /><br /><br />
  
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br /><br />
  
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          /><br /><br />
  
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            required
          /><br /><br />
  
          <label htmlFor="style">Fighting Style:</label>
          <input
            type="text"
            id="style"
            name="style"
            value={formData.style}
            onChange={handleInputChange}
            required
          /><br /><br />
  
          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            required
          /><br /><br />
  
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            required
          /><br /><br />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default FighterForm;
