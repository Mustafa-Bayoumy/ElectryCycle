import { useEffect, useState } from "react";
import "./BTT.css";
import arrow from "/src/assets/images/arrow.png";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Check immediately in case user starts scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null; // 🚀 won't even render until visible

  return (
    <button id="backToTopBtn"
      onClick={scrollToTop}
      className="btn btn-primary d-flex align-items-center justify-content-center">
      <img src={arrow} alt="Back to Top"/>
    </button>
  );
}
