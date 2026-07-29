import { useEffect, useState } from "react";
import "./Navbar.css";
import "/src/App.css";
import Logo from "./Logo";
import Links from "./Links";
import Buttons from "./Buttons";


export default function Navbar({ theme, toggleTheme}) {  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-dark bg-black fixed-top px-4 py-3 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <Logo />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <Links />
          <Buttons theme={theme} toggleTheme={toggleTheme}/>
        </div>
      </div>
    </nav>
  );
}
