const router = require("express").Router();
const withAuth = require('../utils/auth');
const { User, Post, Category, Comment } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
  
});

router.get("/main", (req, res) => {
  res.render("main", { loggedIn: true })
});

router.get("/user-post", (req, res) => {
  res.render("user-post");
});

router.get("/profile", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.userId
    },
    attributes: [
      'id',
      'title',
      'text',
      'user_id',
      'image_url',
      'category',
      'created_at',
    ]
  })
    .then(dbPostData => {
      console.log(req.session.userId);
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(posts);
      res.render('profile', { loggedIn: true })
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

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