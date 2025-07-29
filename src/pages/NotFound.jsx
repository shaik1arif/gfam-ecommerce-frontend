import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to={isLoggedIn ? "/dashboard" : "/login"}>Go to Dashboard</Link>
    </div>
  );
}
