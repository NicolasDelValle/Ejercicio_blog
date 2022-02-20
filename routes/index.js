const express = require("express");
const route = express.Router();
//require routs
const articulosRutas = require("./articulosRoutes");
const adminRutas = require("./adminRoutes");
const publicRoutes = require("./publicRoutes");
const editorRoutes = require("./editorRoutes");
const writerRoutes = require("./writerRoutes");
const apiRoutes = require("./apiRoutes");
//require middlewares
const userisAdmin = require("../middlewares/userIsAdmin");
const userisEditor = require("../middlewares/userIsEditor");
const userisWriter = require("../middlewares/userIsWriter");

//Use routes
route.use(publicRoutes);
route.use(articulosRutas);
route.use("/api/articles", apiRoutes);
route.use("/admin", userisAdmin, adminRutas);
route.use("/editor", userisEditor, editorRoutes);
route.use("/writer", userisWriter, writerRoutes);

module.exports = route;
