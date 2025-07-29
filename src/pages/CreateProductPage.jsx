import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProductPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post("http://localhost:5000/projects", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        // ✅ Redirect to Products page with message
        navigate("/products", {
          state: { message: "✅ Product created successfully!" },
        });
      }
    } catch (err) {
      alert("❌ Failed to create product.");
    }
  };

  return (
    <div className="create-container">
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Product Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price (₹)"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
