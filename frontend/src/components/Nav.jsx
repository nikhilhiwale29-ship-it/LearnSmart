import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        <p>Learn<span>Smart</span></p>
      </Link>

      <div className="navbar-link">
        <Link to="/home">Home</Link>
      </div>
    </nav>
  );
}

export default Nav;
