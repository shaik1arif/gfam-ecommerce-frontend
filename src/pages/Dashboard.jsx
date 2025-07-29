import React from "react";

export default function Dashboard() {
  const name = localStorage.getItem("name");

  return (
    <div className="dashboard-container">
      <h2>Welcome, {name} 👋</h2>
      <p className="dashboard-subtext">You're logged in and ready to manage your products.</p>
    </div>
  );
}
