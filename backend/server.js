const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { exec } = require("child_process");
const fs = require("fs");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ test route (Render needs this)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ===============================
// 🔥 PYTHON RUN ROUTE
// ===============================
const { spawn } = require("child_process");

app.post("/run-python", (req, res) => {
  const { code, input } = req.body;

  const python = spawn("py", ["-c", code]); // run code directly

  let output = "";
  let error = "";

  // ✅ Capture output
  python.stdout.on("data", (data) => {
    output += data.toString();
  });

  // ✅ Capture errors
  python.stderr.on("data", (data) => {
    error += data.toString();
  });

  // ✅ 🔥 SEND INPUT TO PYTHON
  if (input) {
    python.stdin.write(input + "\n");
  }

  python.stdin.end(); // VERY IMPORTANT

  python.on("close", () => {
    if (error) {
      return res.json({ error });
    }
    res.json({ output });
  });
});

// ===============================
// ROUTES
// ===============================
app.use("/api/auth", require("./routes/authRoutes"));

// ===============================
// DATABASE
// ===============================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ===============================
// SERVER
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);