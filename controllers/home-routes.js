const router = require("express").Router();
const { User, Post, Category, Comment } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/main", (req, res) => {
  res.render("main");
});

module.exports = router;