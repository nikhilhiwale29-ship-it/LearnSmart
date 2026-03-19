import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const API_BASE_URL = "http://localhost:5000";
const GOOGLE_CLIENT_ID = "935060499007-pq65iug7ispeh2aevjnqsojh2d70v1ja.apps.googleusercontent.com";
const GITHUB_CLIENT_ID = "Ov23lisWIacShYwhK0tn";

/* global google */ // ← Tells ESLint that 'google' is a valid global variable

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const githubCodeHandled = useRef(false);
  const navigateRef = useRef(navigate); // ← Stable ref for navigate

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ← Keep navigateRef in sync without triggering re-renders
  useEffect(() => {
    navigateRef.current = navigate;
  }, [navigate]);

  // ← Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigateRef.current("/dashboard", { replace: true });
    }
  }, []);

  // --- 1. GITHUB AUTH LOGIC ---
  const handleGithubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user:email`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code && !githubCodeHandled.current) {
      githubCodeHandled.current = true;
      window.history.replaceState({}, document.title, "/auth");

      const exchangeGithubCode = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/github`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
          });
          const data = await res.json();

          if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigateRef.current("/dashboard", { replace: true });
          } else {
            alert(data.message || "GitHub Login failed");
          }
        } catch (error) {
          console.error("GitHub Auth Error:", error);
          alert("Error connecting to GitHub Auth API");
        } finally {
          setIsLoading(false);
        }
      };

      exchangeGithubCode();
    }
  }, []); // ← Safe to use [] because we use navigateRef instead of navigate

  // --- 2. GOOGLE AUTH LOGIC ---
  // ← useCallback so it has a stable reference for use in useEffect deps
  const handleGoogleLogin = useCallback(async (response) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigateRef.current("/dashboard", { replace: true });
      } else {
        alert(data.message || "Google Login failed");
      }
    } catch (error) {
      alert("Error connecting to Google Auth API");
    }
  }, []); // ← No deps needed since we use navigateRef

  const renderGoogleButton = useCallback((login) => {
    if (window.google) {
      const btnId = login ? "googleSigninBtn" : "googleSignupBtn";
      const element = document.getElementById(btnId);
      if (element) {
        element.innerHTML = "";
        window.google.accounts.id.renderButton(element, {
          type: "icon",
          shape: "circle",
          theme: "filled_blue",
          size: "large",
        });
      }
    }
  }, []);

  // ← Initialize Google on mount — deps satisfied via useCallback
  useEffect(() => {
    const initGoogle = () => {
      if (window.google) {
        google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleLogin,
          auto_select: false,
        });
        renderGoogleButton(isLogin);
      }
    };

    if (window.google) {
      initGoogle();
    } else {
      window.onGoogleLibraryLoad = initGoogle;
    }
  }, [handleGoogleLogin, isLogin, renderGoogleButton]); // ← All deps now included

  // Re-render Google button when switching tabs
  useEffect(() => {
    const timer = setTimeout(() => {
      renderGoogleButton(isLogin);
    }, 200);
    return () => clearTimeout(timer);
  }, [isLogin, renderGoogleButton]);

  // --- 3. MANUAL LOGIN/SIGNUP LOGIC ---
  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard", { replace: true });
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Server error connecting to login API");
    }
  };

  const handleSignup = async (e) => {
    if (e) e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      return alert("Passwords do not match!");
    }
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Signup successful");
        setIsLogin(true);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Server error connecting to signup API");
    }
  };

  if (isLoading) {
    return (
      <div className="auth-page-container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "white", fontSize: "1.2rem" }}>Logging in with GitHub...</p>
      </div>
    );
  }

  return (
    <div className="auth-page-container">
      <div className={`auth-wrapper ${isLogin ? "" : "toggled"}`}>
        <div className="background-shape"></div>
        <div className="secondary-shape"></div>

        {/* LOGIN PANEL */}
        <div className="credentials-panel signin">
          <h3 className="slide-element">Login</h3>
          <div className="field-wrapper slide-element">
            <input
              type="email"
              required
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <label>Email</label>
          </div>
          <div className="field-wrapper slide-element">
            <input
              type="password"
              required
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <label>Password</label>
          </div>

          <div className="switch-link slide-element">
            <span className="signup-link" onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </span>
          </div>

          <button className="submit-button slide-element" type="button" onClick={handleLogin}>
            Login
          </button>

          <div className="social-btns slide-element">
            <div id="googleSigninBtn"></div>
            <button className="github-btn" type="button" onClick={handleGithubLogin}>
              <i className="fa-brands fa-github"></i>
            </button>
          </div>

          <div className="switch-link slide-element">
            <p>Don't have an account? <br />
              <span className="signup-link" onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          </div>
        </div>

        {/* SIGN UP PANEL */}
        <div className="credentials-panel signup">
          <h3 className="slide-element">Register</h3>
          <div className="field-wrapper slide-element">
            <input
              type="text"
              required
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />
            <label>Name</label>
          </div>
          <div className="field-wrapper slide-element">
            <input
              type="email"
              required
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <label>Email</label>
          </div>
          <div className="field-wrapper slide-element">
            <input
              type="password"
              required
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <label>Password</label>
          </div>
          <div className="field-wrapper slide-element">
            <input
              type="password"
              required
              value={signupData.confirmPassword}
              onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
            />
            <label>Confirm Password</label>
          </div>

          <button className="submit-button slide-element" type="button" onClick={handleSignup}>
            Register
          </button>

          <div className="social-btns slide-element">
            <div id="googleSignupBtn"></div>
            <button className="github-btn" type="button" onClick={handleGithubLogin}>
              <i className="fa-brands fa-github"></i>
            </button>
          </div>

          <div className="switch-link slide-element">
            <p>Already have an account? <br />
              <span className="signup-link" onClick={() => setIsLogin(true)}>Sign In</span>
            </p>
          </div>
        </div>

        {/* WELCOME TEXTS */}
        <div className="welcome-section signin">
          <h2 className="slide-element">WELCOME<br /> BACK!</h2>
        </div>
        <div className="welcome-section signup">
          <h2 className="slide-element">WELCOME!</h2>
        </div>
      </div>
    </div>
  );
}

export default Auth;