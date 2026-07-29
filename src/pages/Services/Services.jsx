import React from 'react'
import {Link} from 'react-router-dom'
import './Services.css'
import "/src/App.css"
import img2 from '../../assets/images/img2.jpg' 
import Nav from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BTT from '../../components/BTT/BTT';

export default function Services({ theme, toggleTheme}) {

  return (
    <div className="services-page">
        <div className="nav-bar">
            <Nav theme={theme} toggleTheme={toggleTheme} />
        </div>
      <section className="hero" id="hero">
        <div className="hero-text">
          <h1>Our Recycling Services</h1>
          <p>Leading the way in responsible electronic waste management for a sustainable future.</p>
          <Link to="/DeviceSub" className="primary-btn" >Recycle Now</Link>
        </div>
        <div className="hero-img">
          <img src={img2} alt="Recycling" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/500x300')} />
        </div>
      </section>

      <section className="services" id="services">
        <h2>Core Services</h2>
        <div className="service-grid">
          <div className="card">
            <i className="fas fa-recycle" style={{ color: '#00aaff' }}></i>
            <h3>Device Collection</h3>
            <p>Secure and convenient collection services for all types of electronic devices.</p>
            <Link to="/About" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-shield-alt" style={{ color: '#00aaff' }}></i>
            <h3>Data Destruction</h3>
            <p>Certified data wiping and physical destruction to ensure your sensitive information is irrecoverable.</p>
            <Link to="/About" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-tools" style={{ color: '#00aaff' }}></i>
            <h3>Material Recovery</h3>
            <p>Advanced processes to extract valuable raw materials from e-waste.</p>
            <Link to="/About" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-cogs" style={{ color: '#00aaff' }}></i>
            <h3>Refurbishment & Resale</h3>
            <p>Extending the lifecycle of devices through refurbishment and resale.</p>
            <Link to="/About" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-chart-line" style={{ color: '#00aaff' }}></i>
            <h3>Compliance & Reporting</h3>
            <p>Ensuring recycling activities meet regulations and provide transparent reporting.</p>
            <Link to="/About" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-book" style={{ color: '#00aaff' }}></i>
            <h3>Educational Programs</h3>
            <p>Initiatives to raise awareness about recycling practices.</p>
            <Link to="/About" className="learn-more" >Learn More</Link>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Schedule <br></br> Pickup</h3>
            <p>Easily schedule pickup through our platform.</p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <h3>Secure Transport</h3>
            <p>Our certified team safely transports devices to our recycling facility.</p>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <h3>Processing & Recycling</h3>
            <p>Devices are sorted, data destroyed, and materials recovered.</p>
          </div>
        </div>
      </section>

      <section className="why" id="why">
        <h2>Why Choose Electrycle?</h2>
        <div className="why-grid">
          <div className="card">
            <i className="fas fa-leaf" ></i>
            <h3>Eco-Friendly Practices</h3>
            <p>Sustainable methods that reduce environmental impact.</p>
            <Link to="/Projects" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-shield-alt" ></i>
            <h3>Certified Data Security</h3>
            <p>Guaranteed data destruction adhering to highest standards.</p>
            <Link to="/Projects" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-calendar-alt" ></i>
            <h3>Accessible & Convenient</h3>
            <p>Flexible scheduling and pickup options.</p>
            <Link to="/Projects" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-microchip" ></i>
            <h3>Advanced Technology</h3>
            <p>Cutting-edge recycling technologies for efficiency.</p>
            <Link to="/Projects" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-chart-pie" ></i>
            <h3>Transparent Reporting</h3>
            <p>Clear reports on your recycling efforts and impact.</p>
            <Link to="/Projects" className="learn-more" >Learn More</Link>
          </div>

          <div className="card">
            <i className="fas fa-headset" ></i>
            <h3>Expert <br></br> Support</h3>
            <p>Dedicated team available for assistance anytime.</p>
            <Link to="/Projects" className="learn-more" >Learn More</Link>
          </div>
        </div>
      </section>

      <Footer/>
        <BTT/>
    </div>
  )
}