import "./Hero.css"
import { Link } from "react-router-dom";
import plant from "/src/assets/images/plant.jpg"
function Hero() {
  return (
    <section id="hero1" className="py-5" data-animate-on-scroll>
      <div className="container">
        <div className="hero-box1 shadow-lg rounded-4 p-5">
          <div className="row align-items-center gy-4">
            
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold" data-key="hero-heading">
                Sustainable Electronics Recycling
              </h1>
              <p className="lead mb-4 text-secondary" data-key="hero-text">
                We collect, process and recycle electronic waste responsibly — 
                recovering valuable materials and protecting the environment.
              </p>

              <div className="mt-4">
                <Link
                  to="/DeviceSub"
                  className="rec btn btn-primary btn-lg me-2"
                  data-key="hero-btn-1"
                >
                  Recycle Now
                </Link>
                <Link
                  to="/About"
                  className="learn btn btn-outline-secondary btn-lg"
                  data-key="hero-btn-2"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-center">
                
                <img src={plant} alt="plant" className="img-fluid rounded-4 hero-img1"/>
              

              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
