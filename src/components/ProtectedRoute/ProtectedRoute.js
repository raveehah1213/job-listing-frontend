import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { Component } = props;
  const [token] = localStorage.getItem("token");
  const [isLoggedIn] = useState(!!token);

  return <div>{isLoggedIn ? <Component /> : <Navigate to="/login" />}</div>;
}
