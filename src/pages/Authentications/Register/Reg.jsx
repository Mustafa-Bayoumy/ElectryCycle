import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reg_styles.css";

export default function Reg() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const exists = storedUsers.some(
      (user) => user.email === email || user.name === name
    );

    if (exists) {
      setError("Email or Username already exists!");
      return;
    }

    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Registration successful!");
    navigate("/log");
  };

  return (
    <div className="register-card">
      <h1 className="text-center text-primary mb-2">Electrycle</h1>
      <h3 className="text-center">Create Your Account</h3>

      {error && <p className="text-danger text-center">{error}</p>}

      <form onSubmit={handleRegister}>
        <label className="form-label">Username</label>
        <input
          className="form-control mb-3"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control mb-3"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control mb-3"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          className="form-control mb-4"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>

      <p className="text-center mt-3">
        Already have an account? <Link to="/Login">Login here</Link>
      </p>
    </div>
  );
}
