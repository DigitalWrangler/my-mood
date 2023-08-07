import { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
import { Link } from 'react-router-dom';
import Register from "./Register";
import Password from "./Password";


const AUTH_URL = "/auth";

const Sign = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      const response = await axios.post(AUTH_URL, {
        user: username,
        pwd: password,
      });

      if (response.status === 200) {
        // Login successful, handle roles and access token
        const { roles, accessToken } = response.data;
        // Save the access token and roles to localStorage or session storage
        // For example:
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("roles", JSON.stringify(roles));

        // Redirect to the success page or perform any other actions on success
        // Replace '/success' with your desired success page URL
        window.location.href = "/";
      } else {
        // Login failed, display error message
        setErrorMessage("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Login failed. Please try again later.");
    }
  };

  return (
    <section>
      <p className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">
        {errorMessage}
      </p>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button type="submit">Sign in</button>
      </form>
      <p>
        Not registered?<br />
        <span className="line">
          <Link to="/register">Register</Link>
          <Link to="/password">Forgot password?</Link>
        </span>
      </p>
    </section>
  );
};

export default Sign;