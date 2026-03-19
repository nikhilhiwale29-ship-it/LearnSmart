import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import Footer from "../components/Footer";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // --- Dynamic Stats States ---
  const [stats, setStats] = useState({
    progress: 0,
    streak: 0,
    completed: 0,
  });

  useEffect(() => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (!token) {
    navigate("/auth");
  } else {
    setUser(JSON.parse(storedUser));
    
    // 🔥 CHANGE: Default to 0 instead of 72
    const savedStats = JSON.parse(localStorage.getItem("userStats")) || {
      progress: 0,
      streak: 0,
      completed: 0,
    };
    setStats(savedStats);
  }
}, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <>
      <div className={`dashboard-container ${darkMode ? "dark" : "light"}`}>
        <div className="animated-bg"></div>
        <div className="particles"></div>

        <div className="hamburger" onClick={() => setSidebarOpen(true)}>☰</div>
        {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <h3 className="logo">Learn<span>Smart</span></h3>
          <ul>
            <li onClick={() => navigate("/")}>🏠 Home</li>
            <li onClick={() => navigate("/courses")}>📚 Courses</li>
            <li onClick={() => navigate("/quiz")}>📝 Quizzes</li>
            <li onClick={() => navigate("/notes")}>📒 Notes</li>
            <li className="logout" onClick={handleLogout}>🚪 Logout</li>
          </ul>
        </aside>

        <main className="dashboard">
          <header className="dashboard-header">
            <h2>🚀 Dashboard</h2>
            <div className="header-actions">
              <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
                {darkMode ? "☀ Light" : "🌙 Dark"}
              </button>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </header>

          <div className="dashboard-info fade-in">
            <h3>Welcome, <span className="online">{user?.name || "User"}</span></h3>
            <p>{user?.email}</p>
          </div>

          {/* --- Functional Stats Widgets --- */}
          <div className="stats">
            <div className="stat-card hover-scale">
              📈 Overall Progress
              <h2>{stats.progress}%</h2>
              <div className="mini-progress-bg">
                 <div className="mini-progress-fill" style={{ width: `${stats.progress}%` }}></div>
              </div>
            </div>

            <div className="stat-card hover-scale">
              🔥 Current Streak
              <h2>{stats.streak} Days</h2>
            </div>

            <div className="stat-card hover-scale">
              🎓 Completed
              <h2>{stats.completedCount}</h2>
              <p style={{fontSize: "0.8rem", opacity: 0.7}}>Modules</p>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="dashboard-cards">
            {/* Courses Card */}
            <div className="dash-card hover-scale" onClick={() => navigate("/courses")}>
              <div className="card-icon">📚</div>
              <h3>Languages</h3>
              <p>Continue learning your enrolled Languages.</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${stats.progress}%` }}></div>
              </div>
              <button className="card-btn">Continue</button>
            </div>

            {/* Quiz Card - Example of different progress */}
            <div className="dash-card hover-scale" onClick={() => navigate("/quiz")}>
              <div className="card-icon">📝</div>
              <h3>Quizzes</h3>
              <p>Test your knowledge.</p>
              <div className="progress-bar">
                {/* We can calculate quiz progress based on completed modules */}
                <div className="progress" style={{ width: `${(stats.completed / 15) * 100}%` }}></div>
              </div>
              <button className="card-btn">Start Quiz</button>
            </div>

            {/* Notes Card */}
            <div className="dash-card hover-scale" onClick={() => navigate("/notes")}>
              <div className="card-icon">📒</div>
              <h3>Notes</h3>
              <p>Quick revision for exams.</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
              <button className="card-btn">View Notes</button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;