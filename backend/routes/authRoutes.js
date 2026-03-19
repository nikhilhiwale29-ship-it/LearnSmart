const router = require("express").Router();
const { login, register, googleLogin, githubLogin, sendOtp, resetPasswordWithOtp } = require("../controllers/authController");

router.post("/signup", register);
router.post("/login", login);
router.post("/forgot-password", sendOtp);
router.post("/reset-password", resetPasswordWithOtp);
router.post("/google", googleLogin);
router.post("/github", githubLogin);

module.exports = router;

