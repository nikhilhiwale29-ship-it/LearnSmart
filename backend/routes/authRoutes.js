const router = require("express").Router();
const { login, register, sendOtp, resetPasswordWithOtp } = require("../controllers/authController");

router.post("/register", register); // 👈 ADD THIS
router.post("/login", login);
router.post("/send-otp", sendOtp);
router.post("/reset-password", resetPasswordWithOtp);


module.exports = router;

