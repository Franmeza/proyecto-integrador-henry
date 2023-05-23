import React, { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validation.js"

export default function Form({login}) {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({...userData, [property]:value})
    setErrors(validate({
        ...userData,
        [property]:value
    }))
  };
  
  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <img
          src="https://www.icegif.com/wp-content/uploads/2022/06/icegif-519.gif"
          alt="gif"
        />
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <br />
          <input
            type="text"
            name="email"
            value={userData.email}
            placeholder="Enter your email"
            size="25"
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <br />
          <input
            type="text"
            name="password"
            value={userData.password}
            placeholder="Enter your password"
            size="25"
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <button className={styles.submit} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
