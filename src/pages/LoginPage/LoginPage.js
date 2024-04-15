import React from "react";
import Login from "../../components/Login/Login";
import authBG from "../../assets/images/auth.png";

export default function LoginPage() {
  return (
    <div style={{ display: "flex" }}>
      <Login />
      <img src={authBG} alt="" style={{ maxHeight: "100vh", width: "50vw" }} />
    </div>
  );
}
