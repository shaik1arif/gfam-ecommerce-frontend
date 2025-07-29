# GFam Ecommerce Frontend

A simple e-commerce frontend built with **React.js**, using **React Router**, **Axios**, and **plain CSS** (no Tailwind). It interacts with a Node.js/Express backend to support user registration, login, and product management.

## Features

- Register & Login functionality (with JWT token storage)
- Dashboard greeting (shows logged-in user's name)
- View list of products
- Create new products (title, description, price)
- Delete existing products
- Responsive UI
- 404 Not Found page for invalid routes
- Protected routes using token from localStorage

## Tech Stack

- React.js + Vite
- React Router DOM
- Axios
- Plain CSS (no Tailwind)
- Context API / useState for auth state

## Folder Structure

src/
├── components/ # Reusable UI components (e.g., Navbar)
├── pages/ # Page components (Login, Register, Dashboard, etc.)
├── utils/ # Helper functions or auth logic
├── assets/ # Static files/images (optional)
├── App.jsx
├── main.jsx
├── index.css

## ⚙️ Setup Instructions

1. Clone the repository  
   `git clone https://github.com/shaik1arif/gfam-ecommerce-frontend.git`

2. Install dependencies  
   `npm install`

3. Start the dev server  
   `npm run dev`

4. Make sure the backend server is also running at `http://localhost:5000`

## Pages Overview

- `/register` – Register a new user
- `/login` – Login with email and password
- `/dashboard` – Welcome page after login
- `/products` – List of all products (with delete if logged in)
- `/create` – Form to create a new product (requires login)
- `*` – 404 Not Found page for invalid URLs


