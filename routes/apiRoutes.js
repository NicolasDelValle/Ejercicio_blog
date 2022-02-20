const express = require("express");
const {
  showArticles,
  showSingleArticle,
  createArticle,
  deleteArticle,
} = require("../controllers/apiControllers");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("apiPage", { user: req.user });
});
router.get("/all", showArticles);
router.get("/:id", showSingleArticle);
router.post("/create", createArticle);
router.delete("/delete/:id", deleteArticle);
router.patch("/modify/:id");

module.exports = router;
