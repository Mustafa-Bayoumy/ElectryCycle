import React from "react";
import { Link } from "react-router-dom";
import "./ResetPass.css"; 

export default function ResetPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h1 className="brand mb-2">Electrycle</h1>
        <h3 className="text-center text-light">Reset Password</h3>
        <p className="text-center text-secondary mb-4">
          Enter your new password below to reset your account.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label text-light">New Password</label>
            <input
              type="password"
              className="form-control input-field"
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Confirm Password</label>
            <input
              type="password"
              className="form-control input-field"
              placeholder="Confirm new password"
              required
            />
          </div>

          <Link to="/" type="submit" className="btn btn-primary w-100 mt-2">
            Reset Password
          </Link>
        </form>

        <div className="text-center mt-3">
          <Link to="/Login" className="text-primary">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
