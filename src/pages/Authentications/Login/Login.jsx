import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login_styles.css";
import "/src/App.css"

export default function Login() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (user) =>
        (user.email === identifier || user.name === identifier) &&
        user.password === password
    );

    if (!foundUser) {
      setError("Invalid email/username or password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); // ✅ fixed key
    navigate("/");
  };

  return (
    <>
      <div className="background"></div>

      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="log-card p-4 rounded shadow">
          <h1 className="text-center text-primary mb-2">Electrycle</h1>
          <h3 className="text-center ">Welcome Back!</h3>

          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <label className="form-label">Email or Username</label>
            <input
              type="text"
              className="form-control mb-3"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />

            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control mb-4"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>
          </form>

          <p className="text-center mt-3 text-secondary">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary">Register</Link>
          </p>
          <p className="text-center mt-3 text-secondary">
            Forget Password?{" "}
            <Link to="/forgotpass" className="text-primary">Reset Password</Link>
          </p>
        </div>
      </div>
    </>
  );
}
