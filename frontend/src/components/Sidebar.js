import "../styles/sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-logo">LearnSmart</h2>

        <ul className="sidebar-menu">
          <li onClick={() => navigate("/dashboard")}>🏠 Home</li>
          <li onClick={() => navigate("/courses")}>📚 My Courses</li>
          <li onClick={() => navigate("/progress")}>📈 Progress</li>
          <li onClick={() => navigate("/quiz")}>📝 Quizzes</li>
          <li onClick={() => navigate("/notes")}>📒 Notes</li>
          <li onClick={() => navigate("/settings")}>⚙️ Settings</li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
