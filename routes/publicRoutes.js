const express = require("express");
const { register, storeUser, login } = require("../controllers/userController");
const router = express.Router();
const passport = require("passport");
router.get("/register", register);

router.post("/register", storeUser);

router.get("/login", login);

// router.post("/login", loginAuth);

// router.get("/logout", logout);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  }),
);

module.exports = router;
