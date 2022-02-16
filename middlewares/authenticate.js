const express = require("express");
const passport = require("passport");
const app = express();

function myAuthenticate() {
    app.get("/admin", (req, res) => {
        if (req.isAuthenticated()) {
            res.render("admin");
        } else {
            res.render("/login")
        }
    })
}

module.exports = { myAuthenticate }
