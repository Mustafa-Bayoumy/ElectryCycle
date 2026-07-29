import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPass.css";

export default function ForgetPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h1 className="brand mb-2">Electrycle</h1>
        <h3 className="text-center text-light">Forgot Password?</h3>
        <p className="text-center text-secondary mb-4">
          Enter your email address to receive password reset instructions.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input
              type="email"
              className="form-control input-field"
              placeholder="Enter your email"
              required
            />
          </div>

          <Link to="/ResetPass" className="btn btn-primary w-100 mt-2 text-white text-decoration-none">
            Reset Password
          </Link>
        </form>

        <div className="text-center mt-3">
          <Link to="/log" className="text-primary">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
