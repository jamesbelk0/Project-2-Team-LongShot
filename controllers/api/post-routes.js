const router = require('express').Router();
const sequelize = require('../../config/config');
const { User, Comment, Category, Post } = require('../../models');

// to get all post
router.get('/', (req, res) => {
    console.log('=================================');
    Post.findAll({
        attributes: [
            'id',
            'title',
            'text',
            'image',
            'category',
            'created_at'

        ]
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// to get single post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'text',
            'image',
            'created_at'
        ]
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
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

// to create a post
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        text: req.body.text,
        // user_id: req.session.user.id,
        image_url: req.body.image_url,
        category: req.body.category

    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    
});


module.exports = router;