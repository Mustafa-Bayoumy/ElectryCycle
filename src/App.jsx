import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollTop";
import AppRouter from "./router/AppRouter";

export default function App() {
  // start of light theme
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };
  // end of light theme

  const location = useLocation();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className={fade ? "fade-in" : ""}>
      <ScrollToTop />
      <AppRouter theme={theme} toggleTheme={toggleTheme}  />
    </div>
  );
}
