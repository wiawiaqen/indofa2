const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController");

router.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/googleRedirect', passport.authenticate("google"), userController.googleAuth);
router.get('/signout', userController.signOut);

module.exports = router;
