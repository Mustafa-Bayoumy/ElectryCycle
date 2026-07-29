import"./Services.css"
import { Link } from "react-router-dom";
import Device from "/src/assets/images/x.png"
import sec from "/src/assets/images/sec.png"
import Collection from "/src/assets/images/424422-200.png"
import Processing from "/src/assets/images/2965944-200.png"
import Reuse from "/src/assets/images/ree.png"
export default function Services() {
  return (
    <>
      <section id="services" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white" data-key="services-specialized-heading">
              Our Specialized E-Waste Services
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {/* service 1 */}
            <div className="col-md-5">
              <div
                className="card h-100 border-0 rounded-4 shadow-lg text-white"
                style={{ backgroundColor: "#3b82f6" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <img src={Device} alt="Device icon" width="32" className="me-2" />
                    <h5 className="fw-bold mb-0" data-key="services-card-1-heading">
                      Convenient Device Collection
                    </h5>
                  </div>
                  <p className="mb-4" data-key="services-card-1-text">
                    We offer flexible options for collecting your e-waste, including
                    scheduled pickups and accessible drop-off locations.
                  </p>
                  <Link
                    to="/Services"
                    className="btn btn-light btn-sm fw-bold"
                    style={{ marginTop: "45px", float: "right" }}
                    data-key="discover-more"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>

            {/* service 2 */}
            <div className="col-md-5">
              <div
                className="card h-100 border-0 rounded-4 shadow-lg text-white"
                style={{ backgroundColor: "#3b82f6" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <img src={sec} alt="Data icon" width="32" className="me-2" />
                    <h5 className="fw-bold mb-0" data-key="services-card-2-heading">
                      Secure Data Destruction
                    </h5>
                  </div>
                  <p className="mb-4" data-key="services-card-2-text">
                    Your privacy is our priority. We ensure complete and certified data
                    wiping for all devices, protecting your sensitive information.
                  </p>
                  <Link
                    to="/Services"
                    className="btn btn-light btn-sm fw-bold"
                    style={{ marginTop: "20px", float: "right" }}
                    data-key="discover-more-2"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services 2nd section */}
      <section id="services-process" className="py-5" data-animate-on-scroll>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" data-key="services-process-heading">
              How we work
            </h2>
            <p className="text-secondary" data-key="services-process-text">
              We provide sustainable solutions to handle e-waste effectively.
            </p>
          </div>

          <div className="row g-4">
            {/* services 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body text-center p-4">
                  <img src={Collection} alt="Collection icon" className="mb-3" width="60" />
                  <h5 className="fw-bold" data-key="services-process-card-1-heading">
                    E-Waste Collection
                  </h5>
                  <p className="text-secondary mb-0" data-key="services-process-card-1-text">
                    Convenient collection of old devices and electronics for recycling.
                  </p>
                </div>
              </div>
            </div>

            {/* service 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body text-center p-4">
                  <img src={Processing} alt="Processing icon" className="mb-3" width="60" />
                  <h5 className="fw-bold" data-key="services-process-card-2-heading">
                    Safe Processing
                  </h5>
                  <p className="text-secondary mb-0" data-key="services-process-card-2-text">
                    Environmentally friendly dismantling and processing of e-waste.
                  </p>
                </div>
              </div>
            </div>

            {/* service 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body text-center p-4">
                  <img src={Reuse} alt="Reuse icon" className="mb-3" width="60" />
                  <h5 className="fw-bold" data-key="services-process-card-3-heading">
                    Reuse & Recovery
                  </h5>
                  <p className="text-secondary mb-0" data-key="services-process-card-3-text">
                    Recovering valuable components and reusing materials for new products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
