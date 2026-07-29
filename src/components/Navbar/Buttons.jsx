import { Link } from "react-router-dom";

export default function Buttons({ theme, toggleTheme}) {

  return (
    <div className="ms-auto d-flex align-items-center gap-3">
      <button id="theme-toggle" onClick={toggleTheme} className="btn btn-sm">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <Link id="login" className="btn btn-outline-light" to="/login">
        Login
      </Link>

      <Link id="register" className="btn btn-primary" to="/register">
        Register
      </Link>
    </div>
  );
}
