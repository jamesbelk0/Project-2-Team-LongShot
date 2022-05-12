const router = require("express").Router();
const { User, Post, Category, Comment } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;