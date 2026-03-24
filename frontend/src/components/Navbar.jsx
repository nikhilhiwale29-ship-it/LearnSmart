import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        <p>Learn<span>Smart</span></p>
      </Link>

      <div className="navbar-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#how-it-works">Steps</a>
        <a href="#tools">Tools</a>
      </div>
    </nav>
  );
}

export default Navbar;
