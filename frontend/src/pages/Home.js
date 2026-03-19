import Navbar from "../components/Navbar";
import heroImage from "../assets/hero2.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; 
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Navbar />
      </header>
      
      <div className="home">

        {/* 1. HERO SECTION */}
        <section className="hero" id="hero">
          <div className="hero-left">
            <h1>
              Master New Skills Faster <br />
              <span>with LearnSmart</span>
            </h1>
            <p>
              Personalized courses designed to help you reach your career goals.
            </p>
            <div className="hero-btns">
               <button className="hero-btn" onClick={() => navigate("/auth")}>Get Started</button>
               <button className="secondary-btn" onClick={() => document.getElementById('how-it-works').scrollIntoView()}>Learn More</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="AI Learning" />
          </div>
        </section>
      
        {/* 3. ABOUT & MISSION SECTION */}
        <section className="about-details" id="about">
          <div className="about-container">
            <span className="section-tag">About Us</span>
            <h2>Redefining Modern Education</h2>
            <p className="about-subtitle">
              Traditional learning is static. <strong>LearnSmart</strong> is dynamic. 
              We believe education should be as unique as the individual.
            </p>
            
            <div className="about-grid">
              <div className="about-item">
                <div className="icon-circle">🚀</div>
                <h4>Our Mission</h4>
                <p>To democratize high-end education, making world-class coaching available to everyone, everywhere.</p>
              </div>
              <div className="about-item">
                <div className="icon-circle">💡</div>
                <h4>Adaptive Learning</h4>
                <p>Our algorithms track your progress in real-time, automatically adjusting quiz difficulty to keep you in the "Growth Zone."</p>
              </div>
              <div className="about-item">
                <div className="icon-circle">🌍</div>
                <h4>Global Community</h4>
                <p>Connect with peers, share "Smart Notes," and compete in monthly challenges to earn certificates and rewards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS SECTION */}
        <section className="how-it-works" id="how-it-works">
           <div className="section-title">
             <h2>Three Steps to Success</h2>
           </div>
           <div className="steps-container">
              <div className="step">
                <span className="step-num">01</span>
                <h3>Create Account</h3>
                <p>Sign up for free using you Original Gmail.</p>
              </div>
              <div className="step">
                <span className="step-num">02</span>
                <h3>Learn & Practice</h3>
                <p>Choose an language for learning, and solve interactive quizzes.</p>
              </div>
              <div className="step">
                <span className="step-num">03</span>
                <h3>Get Notes</h3>
                <p>After Learning and Solving quiz you can access our notes/cheatsheet.</p>
              </div>
           </div>
        </section>

        {/* 5. FEATURES (What we provide) */}
        <section className="features-section" id="tools">
          <div className="section-title">
             <span className="section-tag">Our Tools</span>
             <h2>Unlock Your Potential</h2>
             <p>Access these core modules as soon as you log in.</p>
          </div>

          <div className="features-container">
            <div className="feature-card highlight" onClick={() => navigate("/auth")}>
              <h3>📚 Explore Languages</h3>
              <p>Master Python, Javascript, java, and more with AI-led paths.</p>
              <span className="lock-text">🔒 Login required</span>
            </div>

            <div className="feature-card" onClick={() => navigate("/auth")}>
              <h3>📝 Quiz Solving</h3>
              <p>Dynamic assessment tools that prepare you for real-world interviews.</p>
              <span className="lock-text">🔒 Login required</span>
            </div>

            <div className="feature-card" onClick={() => navigate("/auth")}>
              <h3>📒 Smart Notes</h3>
              <p>Notes that highlight key takeaways.</p>
              <span className="lock-text">🔒 Login required</span>
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION (CTA) */}
        <section className="cta-section">
           <h2>Ready to start your journey?</h2>
           <p>Join to LearnSmart</p>
           <button className="cta-btn" onClick={() => navigate("/auth")}>Get Started for Free</button>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Home;