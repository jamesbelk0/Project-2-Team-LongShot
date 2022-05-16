const router = require('express').Router();
const sequelize = require('../../config/config');
const { User, Post, Category } = require('../../models');

router.get('/', (req,res)=>{
    Category.findAll({
        attributes: ['id', 'title', 'post_id','user_id'],
        
      })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Category.create({
        title: req.body.title,
        post_id: req.body.post_id,
        user_id: req.body.user_id
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;