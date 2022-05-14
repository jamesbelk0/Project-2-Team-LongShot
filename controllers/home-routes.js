const router = require("express").Router();
const withAuth = require('../utils/auth');
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

router.get("/profile", withAuth, (req, res) => {
  // Post.findAll({
  //   where: {
  //     user_id: req.session.user_id
  //   },
  //   attributes: [
  //     'id',
  //     'title',
  //     'text',
  //     'user_id',
  //     'iamge',
  //     'category',
  //     'created_at',
  //   ]
  // })
  //   .then(dbPostData => {
  //     const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('profile')
    })
    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json(err);
    // });
// });

// router.get('/', (req, res) => {
//   console.log(req.session);
//   Post.findAll({
//       attributes: [
//           'id',
//           'title',
//           'text',
//           'created_at',
//       ]
//   })
//       .then(dbPostData => {
//           // pass a single post object into the user-post template
//           const posts = dbPostData.map(post => post.get({ plain: true }));
//           console.log(dbPostData[0]);
//           res.render('user-post', { posts });
//       })
//       .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//       });
// });
module.exports = router;