const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, User, Category } = require('../models');


router.get("/", (req, res) => {
    console.log(req.session.id)
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
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
            res.render('profile', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;