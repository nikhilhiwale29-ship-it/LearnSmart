import heroImage from "../assets/hero2.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";   // ✅ import footer
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== HOME CONTENT ===== */}
      <div className="home">

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-left">
            <h1>
              Master New Skills Faster <br />
              <span>with LearnSmart</span>
            </h1>

            <p>
              Personalized courses designed to help you reach your career goals.
            </p>

            <button
              className="hero-btn"
              onClick={() => navigate("/login")}
            >
              Join for Free
            </button>
          </div>

          <div className="hero-right">
            <img src={heroImage} alt="AI Learning" />
          </div>
        </section>

        {/* FEATURES SECTION */}
        <div className="features-section">

          <div
            className="feature-card"
            onClick={() => navigate("/login")}
          >
            <h3>📚 Explore Courses</h3>
            <p>Unlock AI-powered courses after login.</p>
            <span className="lock-text">🔒 Login required</span>
          </div>

          <div
            className="feature-card"
            onClick={() => navigate("/login")}
          >
            <h3>📝 Quiz Solving</h3>
            <p>Practice quizzes and test your skills.</p>
            <span className="lock-text">🔒 Login required</span>
          </div>

          <div
            className="feature-card"
            onClick={() => navigate("/login")}
          >
            <h3>📒 Smart Notes</h3>
            <p>Access structured notes for fast revision.</p>
            <span className="lock-text">🔒 Login required</span>
          </div>

        </div>

      </div>

      {/* ===== FOOTER (OUTSIDE HOME DIV) ===== */}
      <Footer />
    </>
  );
}

export default Home;
