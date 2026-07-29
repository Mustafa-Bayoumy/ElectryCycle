import { Link } from "react-router-dom";

export default function Links() {
  return (
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <Link className="nav-link" data-key="nav-home" to="/">Home</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" data-key="nav-about" to="/about">About</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" data-key="nav-Services" to="/Services">Services</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" data-key="nav-Projects" to="/Projects">Projects & Impact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" data-key="nav-FAQ" to="/FAQ">FAQ</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" data-key="nav-ContactUs" to="/ContactUs">Contact Us</Link>
      </li>
    </ul>
  );
}
