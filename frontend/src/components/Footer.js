import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <h2>LearnSmart</h2>
          <p>
            LearnSmart is a smart learning platform designed to help students
            learn faster with courses, quizzes, and notes — all in one place.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Quizzes</li>
            <li>Notes</li>
            <li>Dashboard</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li>Smart Quiz Practice</li>
            <li>Structured Notes</li>
            <li>Progress Tracking</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: learnsmart598@gmail.com</p>
          <p>Made with ❤️ for learners</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LearnSmart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
