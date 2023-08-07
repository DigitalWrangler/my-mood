import React, { useState } from 'react';
import axios from '../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const FIGHTER_URL = '/fighter'; // Change this URL according to your backend API endpoint

const FighterForm = () => {
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      gender: '',
      age: '',
      weight: '',
      style: '',
      nationality: '',
    });
  
    const [success, setSuccess] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Create the JSON object based on the input values
      const fighterObject = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        gender: formData.gender,
        age: formData.age,
        weight: formData.weight,
        style: formData.style,
        nationality: formData.nationality,
      };
  
      // Display the generated JSON object in the console
      console.log(JSON.stringify(fighterObject, null, 2));
  
      // Set success state to true
      setSuccess(true);
    };
  
    return (
      <section>
        {success ? (
          <div>
            <h1>Success!</h1>
            <p>Fighter details submitted successfully.</p>
          </div>
        ) : (
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
              />
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="weight">Weight:</label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="style">Style:</label>
              <input
                type="text"
                id="style"
                name="style"
                value={formData.style}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="nationality">Nationality:</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
              />
              {/* Add other input fields here */}
              <button type="submit">Generate JSON</button>
            </form>
          </div>
        )}
      </section>
    );
  };
  
  export default FighterForm;
