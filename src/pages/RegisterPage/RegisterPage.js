import React from "react";
import Register from "../../components/Register/Register";
import authBG from "../../assets/images/job.png";
export default function RegisterPage() {
  return (
    <div style={{ display: "flex" }}>
      <Register />
      <img
        src={authBG}
        style={{ maxHeight: "100vh", width: "50vw" }}
        alt="Login cover"
      />
    </div>
  );
}
