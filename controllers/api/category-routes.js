const router = require('express').Router();
const sequelize = require('../../config/config');
const { User, Comment, Post, Category } = require('../../models');

// to get all post
router.get('/', (req,res) => {
    console.log('=========================');
    Category.findAll({
        attributes: [
            'id',
            'title',
            'post_id',
            // [sequelize.literal('(SELECT COUNT(*) FROM category WHERE category.name = post.post_id)'), 'category_id']
        ]
        // ,
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //         include: {
        //           model: User,
        //           attributes: ['username']
        //         }
        //       },
        //       {
        //         model: User,
        //         attributes: ['username']
        //       }
        //     ]
          })
            .then(dbPostData => res.json(dbPostData))
            .catch(err => {
              console.log(err);
              res.status(500).json(err);
            });
        });

// to get single post
router.get('/:id', (req,res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_id',
            // [sequelize.literal('(SELECT COUNT(*) FROM category WHERE category.name = post.post_id)'), 'category_id']
        ]
        // ,
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //         include: {
        //           model: User,
        //           attributes: ['username']
        //         }
        //       },
        //       {
        //         model: User,
        //         attributes: ['username']
        //       }
        //     ]
          })
            .then(dbPostData => res.json(dbPostData))
            .catch(err => {
              console.log(err);
              res.status(500).json(err);
            });
        });

// to create a category
router.post('/', (req,res) => {
    Category.create({
        title: req.body.title,
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;