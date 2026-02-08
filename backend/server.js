const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors({
  origin: "*",   // later you can restrict to Netlify domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// test route (VERY IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// routes
app.use("/api/auth", require("./routes/authRoutes"));

// mongo connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
