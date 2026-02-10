import { useState } from "react";
import "../styles/auth.css";

export const API_BASE_URL = "https://learnsmart-efgl.onrender.com";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent to your email");
        setOtpSent(true);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send OTP</button>
          </form>
        ) : (
          <>
            <p className="info-text">
              OTP has been sent to <b>{email}</b>
            </p>

            <button
              className="reset-btn"
              onClick={() => (window.location.href = "/reset-password")}
            >
              Verify OTP & Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
