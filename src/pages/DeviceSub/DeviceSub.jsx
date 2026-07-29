import React, { useState } from "react";
import "./DeviceSub.css";
import "/src/App.css"
import Nav from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BTT from '../../components/BTT/BTT';

export default function RegisterForm({ theme, toggleTheme}) {
  const [deviceType, setDeviceType] = useState("Laptop");
  const [condition, setCondition] = useState("Broken");
  const [delivery, setDelivery] = useState("Pickup");
  const [info, setInfo] = useState("");

  return (
    <div>
        <div className="NAVB">
            <Nav theme={theme} toggleTheme={toggleTheme} />
        </div>
    <div className="rf-wrapper d-flex flex-column align-items-center">

      {/* Heading */}
      <div className="rf-heading text-center">
        <h1 className="fw-bold">Register Your Electronic Device for Recycling</h1>
        <p className="rf-subtitle">
          Facilitate the responsible disposal of your old electronics. Provide details 
          about your device and choose your preferred delivery method.
        </p>
      </div>

      {/* Form Container */}
      <div className="rf-form card p-4 rounded-4">
        <h3 className="text-center fw-bold mb-1">Device Details</h3>
        <p className="text-center text-secondary mb-4">
          Please provide details about your electronic device for recycling.
        </p>

        {/* Device Type */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Device Type</label>
          <select
            className="form-select rf-input"
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option>Laptop</option>
            <option>Phone</option>
            <option>Tablet</option>
            <option>Desktop</option>
          </select>
        </div>

        {/* Condition */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Device Condition</label>
          <div className="d-flex gap-4 flex-wrap">
            <div className="form-check">
              <input
                type="radio"
                name="condition"
                className="form-check-input"
                checked={condition === "Broken"}
                onChange={() => setCondition("Broken")}
              />
              <label className="form-check-label">Broken</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                name="condition"
                className="form-check-input"
                checked={condition === "Unfixable"}
                onChange={() => setCondition("Unfixable")}
              />
              <label className="form-check-label">Unfixable</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                name="condition"
                className="form-check-input"
                checked={condition === "Working"}
                onChange={() => setCondition("Working")}
              />
              <label className="form-check-label">Working (Unwanted)</label>
            </div>
          </div>
        </div>

        {/* Delivery Method */}
        <div className="mb-1">
          <label className="form-label fw-semibold">Delivery Method</label>
          <div className="d-flex gap-4 flex-wrap">
            <div className="form-check">
              <input
                type="radio"
                name="delivery"
                className="form-check-input"
                checked={delivery === "Pickup"}
                onChange={() => setDelivery("Pickup")}
              />
              <label className="form-check-label">Pickup</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                name="delivery"
                className="form-check-input"
                checked={delivery === "Drop"}
                onChange={() => setDelivery("Drop")}
              />
              <label className="form-check-label">Drop Off</label>
            </div>
          </div>
        </div>

        <p classname="rf-note text-secondary small mt-0 mb-3">
          Pickup services may incur a small fee depending on location and device size.
        </p>

        {/* Additional Info */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Additional Information (Optional)
          </label>
          <textarea
            className="form-control rf-input"
            rows="4"
            placeholder="Provide any extra details such as model number, visible damage, or preferred pickup times..."
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>

        <button className="btn rf-submit w-100 py-2 fw-semibold">
          Submit Registration
        </button>
      </div>
    </div>
    <Footer />
    <BTT />
    </div>
  );
}
