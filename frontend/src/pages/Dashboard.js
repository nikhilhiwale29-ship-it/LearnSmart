import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* ☰ Hamburger */}
      <div className="hamburger" onClick={() => setSidebarOpen(true)}>
        ☰
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <br></br>
      <br></br>
        <h3 className="logo">My Dashboard</h3>

        <ul>
          <li onClick={() => navigate("/")}>🏠 Home</li>
          <li onClick={() => navigate("/courses")}>📚 Courses</li>
          <li onClick={() => navigate("/quiz")}>📝 Quizzes</li>
          <li onClick={() => navigate("/notes")}>📒 Notes</li>
          <li className="logout" onClick={handleLogout}>
            🚪 Logout
          </li>
        </ul>
      </aside>

      {/* Main Dashboard */}
      <main className="dashboard">
        <header className="dashboard-header">
          <h2>📊 Dashboard</h2>

          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </header>

        <div className="dashboard-info">
          <h3>
            Status: <span className="online">Logged In</span>
          </h3>
          <p>
            <strong>Name:</strong> {user?.name || "User"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "Not available"}
          </p>
        </div>

        <div className="dashboard-cards">
          <div className="dash-card" onClick={() => navigate("/courses")}>
            📚 Courses
            <p>Continue learning</p>
          </div>

          <div className="dash-card" onClick={() => navigate("/quiz")}>
            📝 Quizzes
            <p>Test your skills</p>
          </div>

          <div className="dash-card" onClick={() => navigate("/notes")}>
            📒 Notes
            <p>Quick revision</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
