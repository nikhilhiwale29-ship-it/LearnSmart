const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const axios = require("axios");

/* ================= REGISTER ================= */
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "Signup successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= LOGIN ================= */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        semester: user.semester,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper to generate your App's JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// --- GOOGLE LOGIN/SIGNUP CONTROLLER ---
exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    // 1. Verify the Google ID Token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { name, email } = ticket.getPayload();

    // 2. Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // 3. If user doesn't exist, create them (Signup)
      // We set a random password because password is likely 'required' in your schema
      user = await User.create({
        name,
        email,
        semester: "N/A", 
        password: Math.random().toString(36).slice(-10), 
      });
    }

    // 4. Generate your app's token and send response
    const appToken = generateToken(user._id);

    res.status(200).json({
      token: appToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(400).json({ message: "Google authentication failed" });
  }
};


exports.githubLogin = async (req, res) => {
  const { code } = req.body;
  console.log("--- New GitHub Login Attempt ---");
  console.log("Received Code:", code);

  try {
    // 1. Exchange code for Access Token
    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET, // Check if this is defined in .env!
        code,
      },
      { headers: { accept: "application/json" } }
    );

    console.log("GitHub Token Response:", tokenResponse.data);

    if (tokenResponse.data.error) {
      return res.status(400).json({ 
        message: `GitHub Error: ${tokenResponse.data.error_description || tokenResponse.data.error}` 
      });
    }

    const accessToken = tokenResponse.data.access_token;

    // 2. Get User Profile
    const userResponse = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log("GitHub User Data:", userResponse.data);

    // 3. Database Logic (Ensure 'semester' is NOT required here)
    const { login, email, id } = userResponse.data;
    let user = await User.findOne({ email: email || `${id}@github.com` });

    if (!user) {
      user = await User.create({
        name: login,
        email: email || `${id}@github.com`,
        password: Math.random().toString(36).slice(-10), 
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

  } catch (error) {
    console.error("DETAILED ERROR:", error.response?.data || error.message);
    res.status(500).json({ message: "GitHub authentication failed", details: error.message });
  }
};


const nodemailer = require("nodemailer");

// 1. Create the Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


/* ================= SEND OTP ================= */
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetOtp = otp;
    user.resetOtpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    // 2. Send Email via Nodemailer
    const mailOptions = {
      from: `"LearnSmart Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "LearnSmart - Password Reset OTP",
      html: `
        <div style="font-family: Arial; padding:20px; border: 1px solid #eee;">
          <h2 style="color: #6a11cb;">Reset Your Password</h2>
          <p>Use the code below to reset your password. It expires in 10 minutes.</p>
          <h1 style="background: #f4f4f4; padding: 10px; display: inline-block; letter-spacing: 5px;">
            ${otp}
          </h1>
          <p>If you didn't request this, please ignore this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully via Gmail",
    });
  } catch (error) {
    console.error("NODEMAILER ERROR 👉", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
};

/* ================= RESET PASSWORD ================= */
exports.resetPasswordWithOtp = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (
      !user ||
      user.resetOtp !== otp ||
      user.resetOtpExpiry < Date.now()
    ) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetOtp = undefined;
    user.resetOtpExpiry = undefined;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.error("RESET PASSWORD ERROR 👉", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

