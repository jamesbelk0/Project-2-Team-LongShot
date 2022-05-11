const router = require('express').Router();
const sequelize = require('../../config/config');
const { User, Comment, Category } = require('../../models');
// TODO: INSERT THE MODEL NAMES THAT WILL BE USED
const {} = require('../../models');

// to get all post
router.get('/', (req,res) => {

});

// to get single post
router.get('/:id', (req,res) => {

});

// to create a post
router.post('/', (req,res) => {

});


module.exports = router;