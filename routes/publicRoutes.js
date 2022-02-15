const express = require("express");
const { register, storeUser, login } = require("../controllers/userController");

const router = express.Router();

router.get("/register", register);

router.post("/register", storeUser);

router.get("/login", login);

router.post("/login", loginAuth);

router.get("/logout", logout);




module.exports = router;