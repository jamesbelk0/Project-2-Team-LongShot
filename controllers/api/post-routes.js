const router = require('express').Router();
const sequelize = require('../../config/config');
const { User, Post, Category } = require('../../models');

// ALL POSTS
router.get('/', (req, res) => {
    Post.findAll({
      attributes: ['id', 'title', 'text','image_url', 'category','user_id', 'created_at'],
      order: [['created_at', 'DESC']],
        include: [
            {
                model: Category,
                attributes: ['id', 'post_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // GET ONE POST
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'image_url', 'title', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // CREATE A POST
  router.post('/', (req, res) => {
    Post.create({
      title: req.body.title,
      text: req.body.text,
      image_url: req.body.image_url,
      category: req.body.category,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/category/:category', (req, res) => {
    console.log('=================================');
    Post.findAll(
        {
            where: {
              category: req.params.category
            }
        },
        {
        attributes: [
            'id',
            'title',
            'text',
            'image_url'
        ]
      }
    )
    .then(dbPostData => {
      console.log("it worked");
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.json(posts)
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  module.exports = router;