import "./Footer.css";
export default function Footer() {
  return (
    <footer className="mt-5 bg-dark text-light pt-4 pb-4">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 data-key="footer-heading">Electrycle</h5>
            <p data-key="footer-mission">
              Recycling electronics for a sustainable future.
            </p>
            <div className="d-flex gap-3 social-icons">
              <a href="#" className="text-light" aria-label="Follow us on Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light" aria-label="Follow us on Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-light" aria-label="Follow us on LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <h6 data-key="footer-company-heading">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link" data-key="footer-about">About Us</a></li>
              <li><a href="#" className="footer-link" data-key="footer-careers">Careers</a></li>
              <li><a href="#" className="footer-link" data-key="footer-press">Press</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6 data-key="footer-links-heading">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link" data-key="footer-home">Home</a></li>
              <li><a href="#" className="footer-link" data-key="footer-services">Services</a></li>
              <li><a href="#" className="footer-link" data-key="footer-projects">Projects</a></li>
              <li><a href="#" className="footer-link" data-key="footer-contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6 data-key="footer-legal-heading">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link" data-key="footer-terms">Terms of Service</a></li>
              <li><a href="#" className="footer-link" data-key="footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="footer-link" data-key="footer-cookie">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6 data-key="footer-updated-heading">Stay Updated</h6>
            <form className="d-flex flex-column gap-2">
              <label htmlFor="newsletterEmail" className="visually-hidden" data-key="footer-email-label">
                Your Email Address
              </label>
              <input
                type="email"
                id="newsletterEmail"
                className="form-control"
                placeholder="Your email"
                aria-label="Enter your email address"
                data-key="footer-email-placeholder"
              />
              <button className="btn btn-primary" data-key="footer-subscribe">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
