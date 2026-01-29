import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo (2).png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        <img src={logo} alt="LearnSmart Logo" className="navbar-logo-img" />
        <span className="navbar-title"></span>
      </Link>

      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
