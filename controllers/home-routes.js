const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, User, Category } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: ['id', 'title', 'text', 'image_url', 'category', 'created_at'],
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
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('home', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'text',
            'image_url',
            'created_at',
            'category'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData){
            res.status(404).json({message: 'No post found with that ID'});
            return;
        }

        const post = dbPostData.get({plain: true});

        res.render('read-more', { post, loggedIn: req.session.loggedIn  });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

});

router.get("/user-post", (req, res) => {
    res.render("user-post", {loggedIn: req.session.loggedIn});
});


module.exports = router;