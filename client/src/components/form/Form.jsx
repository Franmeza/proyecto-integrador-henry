import React, { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validation.js";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(
      validate({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(userData);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <img
          src="https://www.icegif.com/wp-content/uploads/2022/06/icegif-519.gif"
          alt="gif"
        />
        <div className={styles.emailContainer}>
          <label htmlFor="email">
            <strong>Email</strong>(francisco@rickandmorty.com)
          </label>
          <br />
          <input
            className={styles.emailInput}
            type="text"
            name="email"
            // value={userData.email}
            placeholder="Enter your email"
            size="25"
            onChange={handleChange}
          />
          <br />
          <span className={styles.errorEmail}>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>(1234569)
          </label>
          <br />
          <input
            className={styles.passwordInput}
            type="text"
            name="password"
            // value={userData.password}
            placeholder="Enter your password"
            size="25"
            onChange={handleChange}
          />
          <br />
          <span className={styles.errorPassword}>{errors.password}</span>
        </div>
        <button className={styles.submit} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
