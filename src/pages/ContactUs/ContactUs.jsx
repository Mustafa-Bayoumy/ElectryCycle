import React from "react";
import "./ContactUs.css";
import "/src/App.css"
import Nav from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BTT from '../../components/BTT/BTT';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import map from "/src/assets/images/map.png"


export default function Contact({ theme, toggleTheme}) {
  return (
    <div>
    <div className="contact-page">
        <div className="nav-bar">
                <Nav theme={theme} toggleTheme={toggleTheme}  />
              </div>
            <section className="contact-section container mt-5 pt-5">
        <h2>Get In Touch With Us</h2>
        <div className="row justify-content-center">
          {/* Left Column */}
          <div className="col-md-5">
            <div className="contact-box">
              <h4>Send Us a Message</h4>
              <p id="para">
                Have a question, suggestion, or simply want to chat? Fill out the form below, and we’ll get back to you as soon as possible.
              </p>
              <form id="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea rows="4" className="form-control" id="message" placeholder="Write your message here..." required></textarea>
                </div>
                <button type="submit" className="btn-submit">Submit Inquiry</button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5">
            <div className="contact-box">
              <h4>Our Details</h4>
              <p><i className="fa-solid fa-location-dot"></i> Electrycle Headquarters 123 Green Avenue, Suite 400 EcoCity, EC 54321</p>
              <p><i className="fa-solid fa-phone"></i> Phone: <a href="tel:+15551234567" className="text-info">+1 (555) 123-4567</a></p>
              <p><i className="fa-solid fa-envelope"></i> Email: <a href="mailto:info@electrycle.com" className="text-info">info@electrycle.com</a></p>
            </div>
            <div >
              <img
                src={map}
                alt="Office Map"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    <BTT/>
    </div>
  );
}
