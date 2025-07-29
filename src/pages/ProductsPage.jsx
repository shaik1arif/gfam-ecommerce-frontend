import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function ProductsPage() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message || "");

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/projects");
      setProjects(res.data);
    } catch (err) {
      setError("Failed to fetch products");
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.delete(`http://localhost:5000/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      alert("Failed to delete");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="products-container">
      <h1>All Products</h1>
      {error && <p className="error">{error}</p>}
      {message && <p className="success-msg">{message}</p>}
      {projects.length === 0 && !error && (
        <p className="no-products-msg">No products available. Create one!</p>
      )}
      <div className="product-grid">
        {projects.map((project) => (
          <div key={project._id} className="product-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="price">₹{project.price}</p>
            {localStorage.getItem("token") && (
              <button
                onClick={() => handleDelete(project._id)}
                className="delete-btn"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
