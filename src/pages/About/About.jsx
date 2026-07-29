import Nav from '../../components/Navbar/Navbar';
import {Link} from "react-router-dom"
import Footer from '../../components/Footer/Footer';
import BTT from '../../components/BTT/BTT';
import "./About_styles.css";
import "/src/App.css"
import windm from "/src/assets/images/windm.jpg"
export default function About({ theme, toggleTheme}) {
  return (
    <div className='About'>
      <div className="nav-bar">
        <Nav theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="py-5 row align-items-center justify-content-center Top">
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>About Electrycle</h1>
        <p>Discover our mission for a sustainable electronic future.</p>
      </div>
      {/* mission section */}
      <div id="mission"  className="container my-5 p-5 rounded-4 shadow-lg align-items-center justify-content-center">
        <h2 style={{ textAlign: "center", fontSize: "35px", marginBottom: "55px" }}>Our Mission</h2>
        <p style={{ textAlign: "center", fontSize: "20px"}}>
          At Electrycle, our mission is to redefine electronic waste management. We provide an intuitive, secure, and environmentally responsible platform for recycling electronic devices, transforming obsolete technology into valuable natural resources, and fostering a circular economy where every device finds a renewed purpose. Through innovation and commitment, we empower individuals and businesses to make a tangible difference.
          </p>
      </div>
      {/* core values section */}
<div id="vision" className="container my-5 p-5 rounded-3">
  <h2 className="text-center mb-5" style={{ fontSize: "35px", fontWeight: "bold" }}>
    Our Core Values
  </h2>

  <div className="row justify-content-center text-center">
    <div className="sec col-md-3 p-3 rounded-3 shadow-lg">
      <div className="icon mb-3">🔄</div>
      <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>
        Sustainability
      </h3>
      <p>
        Committed to eco-friendly practices in all our operations, ensuring a
        healthier planet for future generations by maximizing resource recovery
        and minimizing waste.
      </p>
    </div>

    <div className="sec col-md-3 p-4 rounded-3 shadow-lg">
      <div className="icon mb-3">🛡️</div>
      <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>
        Security
      </h3>
      <p>
        Guaranteeing the secure destruction of sensitive data from all devices,
        upholding your privacy and protecting your digital footprint with rigorous
        protocols.
      </p>
    </div>

    <div className="sec col-md-3 p-4 rounded-3 shadow-lg">
      <div className="icon mb-3">♿</div>
      <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>
        Accessibility
      </h3>
      <p>
        Making electronic device recycling convenient and accessible for everyone,
        simplifying the process so that responsible disposal is effortless and
        widespread.
      </p>
    </div>
  </div>
</div>
      <div id='mission' className=" container my-5 p-5 rounded-4 shadow d-flex flex-column flex-md-row align-items-center gap-4">
        <div className='future-text col-md-6'>
          <h2 className='fw-bold px-3 py-2 rounded-3 d-inline-block'>Our Impact & Future Vision</h2>

        <p className='mt-3'>
          Since our inception, Electrycle has facilitated the responsible recycling of thousands of tons of electronic waste, preventing hazardous materials from contaminating our environment and recovering valuable components for reuse. Our vision extends beyond current practices: we are continuously investing in advanced recycling technologies and expanding our reach to make sustainable device disposal a global standard. We believe in a future where electronic consumption is circular, and waste is an outdated concept.
          </p>
          <Link className='btn btn-link text-info fw-semibold ps-0'> join us in building a greenar future, one device at a time  </Link>
        </div>
        <div future-image col-md-6>
          <img src={windm} alt="windm" className="img-fluid rounded-4"/>
        </div>
      </div>
      <div className="container my-5 p-5 text-center">
        <h2 className="bottom-text">Ready to make a difference?</h2>
        <Link id="Rdybtn" className="btn btn-primary">
        Recycle Now!
        </Link>
      </div>

      <Footer/>
      <BTT/>
    </div> 
  );
}