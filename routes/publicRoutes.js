const express = require("express");
const { register, storeUser, login, logout } = require("../controllers/userController");
const router = express.Router();
const passport = require("passport");

router.get("/error", (req, res) => {
  res.render("error-page", { user: req.user });
});

router.get("/register", register);

router.post("/register", storeUser);

router.get("/login", login);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

router.get("/logout", logout);

module.exports = router;
