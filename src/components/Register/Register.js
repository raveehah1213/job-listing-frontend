import React, { useState, useEffect } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router";
import { registerUser } from "../../apis/auth";
export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const [isFormChecked, setisFormChecked] = useState(false);
  const handleSubmit = async () => {
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.mobile ||
      !formData.password
    ) {
      alert("Fields can't be empty");
      return;
    }

    if (!isFormChecked) {
      alert("please accept the terms and condition");
      return;
    }
    await registerUser(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Create an account</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="name"
        onChange={handleChange}
        type={"text"}
        placeholder="Name"
      ></input>
      <input
        className={styles.input}
        name="email"
        onChange={handleChange}
        type={"email"}
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="mobile"
        onChange={handleChange}
        type={"tel"}
        placeholder="Mobile"
      ></input>
      <input
        className={styles.input}
        name="password"
        onChange={handleChange}
        type={"password"}
        placeholder="Password"
      ></input>
      <span>
        <input
          type="checkbox"
          onChange={(event) => setisFormChecked(event.target.checked)}
          name="checkbox"
          id=""
        />
        <label
          htmlFor="check1"
          style={{ fontSize: "12px" }}
          className={styles.grey}
        >
          by creating an account, i agree to our term of uses and privacy policy
        </label>
      </span>
      <button className={styles.button} onClick={handleSubmit}>
        Create Account
      </button>
      <p className={styles.footer}>
        Already have an account?
        <span className={styles.underline} onClick={() => navigate("/login")}>
          Sign in
        </span>
      </p>
    </div>
  );
}
