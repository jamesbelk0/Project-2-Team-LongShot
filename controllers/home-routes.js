const router = require("express").Router();
const { User, Post, Category, Comment } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/main", (req, res) => {
  res.render("main");
});

router.get("/user-post", (req, res) => {
  res.render("user-post");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'image_url'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(posts)
      res.render('profile', {
        posts
    
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;