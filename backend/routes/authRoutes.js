const router = require("express").Router();
const { login, register, sendOtp, resetPasswordWithOtp } = require("../controllers/authController");

router.post("/signup", register); // 👈 ADD THIS
router.post("/login", login);
router.post("/forgot-password", sendOtp);
router.post("/reset-password", resetPasswordWithOtp);


module.exports = router;

