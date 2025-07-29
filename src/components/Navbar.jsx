import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/dashboard" className="navbar-brand">GFam-Ecommerce</Link>
      </div>
      <div className="navbar-right">
        {token && (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/create" className="nav-link">Create</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
