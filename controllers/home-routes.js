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